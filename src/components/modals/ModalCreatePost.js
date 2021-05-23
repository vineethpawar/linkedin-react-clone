import CloseIcon from '@material-ui/icons/Close';
import PhotoSizeSelectActualOutlinedIcon from '@material-ui/icons/PhotoSizeSelectActualOutlined';import YouTubeIcon from '@material-ui/icons/YouTube';
import React,{useState} from 'react';
import {db} from "../../firebase";
import "./ModalCreatePost.css";
import firebase from 'firebase'


function ModalCreatePost({closeCreatePost}) {
    const today = new Date();
    const [input,setInput]=useState("");
    const [videoUrl,setVideoUrl]=useState("");
    const sendPost = (e) => {
        e.preventDefault();
           if(input.trim()){
            
            db.collection("posts").add({
                name:"Vineeth Pawar",
                text:input,
                dpURL:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTz_Pquk1S248-28oOYSsxp-Ixg5GKF8PlCuA&usqp=CAU",
                role:"React developer",
                posted:today.toString(),
                imgURL:"",
                likes:[],
                hearts:[],
                comments:[{id:'1',timestamp:'1d',commentdata:"yoyo hoe are you"},{id:'1',timestamp:'1d',commentdata:"yoyo hoe are you"},{id:'1',timestamp:'4d',commentdata:"rgeerger hoe are you"}],

                timestamp:firebase.firestore.FieldValue.serverTimestamp(),
                videoURL:videoUrl,
                response:0,
            });
            setInput("");
            closeCreatePost();
        }
    }
    return (
    <div className="modal__container">
        <div className="modal__backdrop" onClick={closeCreatePost}></div>
        <div className="modal__createpost" >
            <form >
               <div className="modal__title">
                   <h3>Create a post</h3>
                    <div className="modal__close" onClick={closeCreatePost}>
                    <CloseIcon className="modal__title__close"/>
                    </div>
               </div>
               <div className="modal__body">
                   <textarea value={input} onChange={e => setInput(e.target.value)} type="text" name="" placeholder="What do you want to talk about?" id="" />
               </div>
               <div className="modal__actions">
                <div className="modal__actions__left">
                    <div className="modal__btn">
                    <PhotoSizeSelectActualOutlinedIcon className="modal__btn__icon"/>
                    </div>
                    <div className="modal__btn">  
                    <YouTubeIcon className="modal__btn__icon"/>
                    </div>
                 </div>
                   <button onClick={sendPost} className="modal__actions__right" style={input.trim()?{color:'white',backgroundColor:'var(--linkedinBlue)',cursor:'pointer'}:null}>
                       Post
                   </button>
               </div>
                
           </form>
        </div>
    </div>
    )
}

export default ModalCreatePost

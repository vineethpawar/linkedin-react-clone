import PhotoSizeSelectActualIcon from '@material-ui/icons/PhotoSizeSelectActual';
import YouTubeIcon from '@material-ui/icons/YouTube';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import VerticalSplitIcon from '@material-ui/icons/VerticalSplit';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';

import {db} from "../../firebase";


import React,{useEffect, useState} from 'react'
import FeedButton from "./FeedButton"
import Post from "../post/Post"
import "./Feed.css"
import firebase from 'firebase'


function Feed({openCreatePost}) {
 const [sort,setSort]=useState("Recent");
 const [sortshow,setSortshow]=useState(false);
 const [posts,setPosts] = useState([]);
 const [extraPosts,setExtraPosts] = useState([]);
 const [modal,setModal]=useState(false);

 useEffect(()=>{
     setSort("Recent")
     db.collection("posts").orderBy('timestamp','desc').limit(5)
   .get()
   .then(snapshot=>(
    setPosts(snapshot.docs.map(doc => (
        {
            id: doc.id,
            data: doc.data(),
        } 
   ))
  
     
   ))) 






    },[])
   


 const sortPostsTop = () =>{
    setSort('Top');
    db.collection("posts").orderBy('response','desc').limit(5)
    .get()
    .then(snapshot=>(
    setPosts(snapshot.docs.map(doc => (
        {
            id: doc.id,
            data: doc.data(),
        } 
   ))
  
     
   ))) 

}

 const sortPostsRecent = () =>{
    setSort('Recent');
    db.collection("posts").orderBy('timestamp','desc').limit(5).get()
   .then(snapshot=>(
    setPosts(snapshot.docs.map(doc => (
        {
            id: doc.id,
            data: doc.data(),
        } 
   ))
  
     
   ))) 
 }

//  const sendPost = () => {
//     db.collection("posts").add({
        
//         name:"Vineeth Pawar",
//         text:"This is not text",
//         dpURL:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTz_Pquk1S248-28oOYSsxp-Ixg5GKF8PlCuA&usqp=CAU",
//         role:"React developer",
//         posted:"1 d",
//         imgURL:"",
//         likes:1,
//         hearts:3,
//         comments:0,
//         isLiked:true,
//         timestamp:firebase.firestore.FieldValue.serverTimestamp(),
//         videoURL:"https://www.youtube.com/watch?v=QaYts9sPmcY&t=8796s",

//     });   
//  }
 


const likePost = (id,isLiked,isLoved,likes,hearts) =>{
        if(isLiked){
        db.collection('posts').doc(`${id}`).update({
            isLiked:false,
            likes:likes-1,
            response:likes+hearts,    
        }) 

    }
    else if(isLoved){
            db.collection('posts').doc(`${id}`).update({
                isLoved:false,
                 hearts:hearts-1,
                 isLiked:true,
                 likes:likes+1,
                 response:likes+hearts,  
            }) 
        }
 else{
        db.collection('posts').doc(`${id}`).update({
            isLiked:true,
        likes:likes+1,
        response:likes+hearts,  
        }) 

    } 

    
}


const lovePost = (id,isLiked,isLoved,likes,hearts) =>{
    if(isLoved){
    db.collection('posts').doc(`${id}`).update({
        isLoved:false,
        hearts:hearts-1,
        response:likes+hearts,  
    }) 

}
else if(isLiked){
        db.collection('posts').doc(`${id}`).update({
            isLiked:false,
             likes:likes-1,
             isLoved:true,
             hearts:hearts+1,
             response:likes+hearts,  
        }) 
    }
else{
    db.collection('posts').doc(`${id}`).update({
        isLoved:true,
        hearts:hearts+1,
        response:likes+hearts,  
    }) 
   
}
}


 
 const loadMorePosts =()=>{
     if(sort=='Recent')
    db.collection("posts").orderBy('timestamp','desc').startAt('5').limit(3).onSnapshot(snapshot => (
        setExtraPosts( snapshot.docs.map(doc => (
            {
                id: doc.id.toString(),
            
                data: doc.data(),
            }
        ))
    )))
    else
    db.collection("posts").orderBy('response','desc').startAt('5').limit(3).onSnapshot(snapshot => (
        setExtraPosts( snapshot.docs.map(doc => (
            {
                id: doc.id.toString(),
            
                data: doc.data(),
            }
        ))
    )))

     setPosts([...posts,...extraPosts]);       

    
 }
 
    return (
        <div className="feedSection">
          <div className="feed">
            <div className="feed__newpost">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSP3tO30bCeKrJ0f1-OQfselZXsYkXYl7oeyg&usqp=CAU" alt="" />
                <div className="feed__input" onClick={openCreatePost}>
                    Start a post
                </div>
            </div>
            <div className="feed__buttons" >
                    <FeedButton Icon={PhotoSizeSelectActualIcon} color="#70b5f9" name="Photo"/>
                    <FeedButton Icon={YouTubeIcon} color="#7fc15e" name="Video"/>
                    <FeedButton Icon={CalendarTodayIcon} color="#e7a33e" name="Event"/>
                    <FeedButton Icon={VerticalSplitIcon} color="#f5987e" name="Write article"/>
            </div>
         </div>

            <div className="feed__sort" onClick={()=>setSortshow(ele=>!ele)}>
                <div className="feed__sort__left"></div>
                <div className="feed__sort__right">
                 <h3> Sort&nbsp;by:&nbsp;<span className="feed__sort__type">{sort}</span></h3>
                 </div>

                  <div className="feed__sort__options" style={{display:sortshow?"block":"none",zIndex:10}}>
                     <div onClick={sortPostsTop} className="feed__sort__option">Top</div>
                     <div onClick={sortPostsRecent} className="feed__sort__option">Recent</div>
                 </div>
            </div>

            
            <div className="postContainer">
         
            <div className="newPostsButton"><ArrowUpwardIcon/> New posts</div>
         
            
           
            {posts.map(({id, data:{name,text,dpURL,role,posted,imgURL,likes,hearts,comments,videoURL,response,timestamp}})=>(
                <div>
                    <Post key={id} id={id} dpURL={dpURL} name={name} role={role} posted={posted} text={text} imgURL={imgURL} likes={likes}   
                     hearts={hearts} comments={comments} videoURL={videoURL} response={response} timestamp={timestamp}
                     
                   
                     />
                 </div>
            ))}
           
           <button onClick={ loadMorePosts}>more</button>
                
               
               

            </div>
           


        </div>
    )
}

export default Feed

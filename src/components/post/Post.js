
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';


import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';

import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

import CommentOutlinedIcon from '@material-ui/icons/CommentOutlined';
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined';
import SendIcon from '@material-ui/icons/Send';


import React,{useState} from 'react'
import FeedButton from '../feed/FeedButton'
import "./Post.css"
import { db } from '../../firebase';
import firebase from 'firebase'

function Post({id,dpURL,name,role,posted,text,imgURL,likes,hearts,comments,videoURL,response}) {
   
   const [commentBox,setCommentBox]=useState(false)
  const [commentInput,setCommentInput] =useState("");
   const addCommentHandler =()=>{
       commentBox ? setCommentBox(false) : setCommentBox(true)
   }
   
   
    const p = new Date(posted)
    const c = new Date()
    const elapsed = Math.floor((c - p)/1000);
    var elapsedTime="";
    
    if(elapsed<60) {
       elapsedTime=`${elapsed} s`
    }
    else if((Math.floor(elapsed/60))<60){
        elapsedTime=`${(Math.floor(elapsed/60))} m`
        
    }
    else if((Math.floor(elapsed/3600)<24)){
        elapsedTime=`${Math.floor(elapsed/3600)} h`
    }
    else if((Math.floor(elapsed/86400))<7){
        elapsedTime=`${(Math.floor(elapsed/86400))} d`
    }
    else if((Math.floor(elapsed/604800))<4){
        elapsedTime=`${(Math.floor(elapsed/604800))} w`
    }
    else if((Math.floor(elapsed/2592000))<12){
        elapsedTime=`${(Math.floor(elapsed/2792000))} mo`
    }
    else {
        elapsedTime=`${(Math.floor(elapsed/31536000))} y`
    }
   
   const [isLikedState,setIsLikedState]=useState(likes.includes('1'))
   
   const [isLovedState,setIsLovedState]=useState(hearts.includes('1'))
   
   const [likesState,setLikesState]=useState(likes.length)
   const [heartsState,setHeartsState]=useState(hearts.length)

    const addCommentInputHandler=()=>{
        setCommentInput("")
    }

   const likeHandler=()=>{
       if(isLikedState){
            setIsLikedState(false)
            setLikesState(res=>res-1)

            db.collection('posts').doc(`${id}`).update({
                likes:firebase.firestore.FieldValue.arrayRemove('1'),
                
            })
       }
       else if(isLovedState){
             setIsLovedState(false)
             setIsLikedState(true)

             setHeartsState(ele=>ele-1)
             setLikesState(ele=>ele+1)

             db.collection('posts').doc(`${id}`).update({
             
                hearts:firebase.firestore.FieldValue.arrayRemove('1'),
                likes:firebase.firestore.FieldValue.arrayUnion('1'),
            })
       }
       else{
        setIsLikedState(true)
        setLikesState(ele=>ele+1)
        db.collection('posts').doc(`${id}`).update({
           
            likes:firebase.firestore.FieldValue.arrayUnion('1'),
        })
       }
    
       


   }

   const loveHandler=()=>{
       if(isLovedState){
            setIsLovedState(false)
            setHeartsState(ele=>ele-1)
            db.collection('posts').doc(`${id}`).update({
               
               
                
                hearts:firebase.firestore.FieldValue.arrayRemove('1'),
            })

       }
       else if(isLikedState){
             setIsLikedState(false)
             setIsLovedState(true)

             setLikesState(ele=>ele-1)
             setHeartsState(ele=>ele+1)

             db.collection('posts').doc(`${id}`).update({
                
                likes:firebase.firestore.FieldValue.arrayRemove('1'),
                hearts:firebase.firestore.FieldValue.arrayUnion('1'),
            })
       }
       else{
           setIsLovedState(true)
           setHeartsState(ele=>ele+1)
           db.collection('posts').doc(`${id}`).update({
           
            hearts:firebase.firestore.FieldValue.arrayUnion('1'),
        })
       }

   }





    const urlExtractor = (videoURL) => {
        const str = videoURL.trim();
        const first=str.lastIndexOf("/");
        const res=str.substr(first+1);
        
        if(res.includes("=")){
            first = str.indexOf("=");
         res=str.substr(first+1);
        }

        if(res.includes("&")){
          const last=res.lastIndexOf("&");
          res=str.substr(first+1,last);
        }

        return(res);
        
    }
    
    return (
        <div className="post" >
           <div className="post__profile__info">
                <div className="post__profile__pic">
                    <img src={dpURL} alt="" />
                </div>

                <div className="post__profile__details">
                     <div className="post__profile__name">{name}</div>
                     <div className="post__profile__role">{role}</div>
                     <div className="post__profile__updated">{elapsedTime}</div>
                </div>

               
            </div>

            <div className="post__text">
               {text}
            
            </div>
{imgURL?
          <div className="post__image">
              <img src={imgURL} alt="" />
          </div> : null
}

{videoURL?
          <div className="post__image">
             <iframe width="560" height="315" src={"https://www.youtube.com/embed/"+urlExtractor(videoURL)} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
          </div> : null
}



<div className="post__stat">
            {likesState?<ThumbUpAltIcon className="post__stat__like"/>:null}
             {heartsState?<FavoriteIcon  className="post__stat__love"/>:null}   
               
              {likesState + heartsState?
                 <a href="" className="">{likesState + heartsState}</a>:null
              }

             
            {comments?   <div className="post__stat__dot">&middot;</div>:null }
            {comments?    <a href="" className="">{comments} commments</a>:null }
              
    </div>

          
          <div className="post__line"></div>

          <div className="post__actions">
              <span onClick={likeHandler}>
              {isLikedState?<FeedButton Icon={ThumbUpAltIcon}  color="#0a66c2" name="Like"/>:<FeedButton Icon={ThumbUpAltOutlinedIcon}  color="grey" name="Like"/>}
              </span>

              <span onClick={loveHandler}>
              {isLovedState?<FeedButton Icon={FavoriteIcon}  color='rgb(196, 57, 57)' name="Love"/>:<FeedButton Icon={FavoriteBorderIcon}  color="grey" name="Love"/>}
              </span>
            
            <span onClick={addCommentHandler}> 
             <FeedButton Icon={CommentOutlinedIcon} color="grey" name="Comment"/>
                  
             </span>
             <FeedButton Icon={ShareOutlinedIcon} color="grey" name="Share"/>
                   
          </div>

          {commentBox &&
              <div className="post__commentbox">
                  <div className="post__comment__dp">
                      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSP3tO30bCeKrJ0f1-OQfselZXsYkXYl7oeyg&usqp=CAU" alt="" />
                  </div>
                  <div className="post__comment__input">
                      <input type="text" value={commentInput} onChange={(e)=>setCommentInput(e.target.value)} placeholder="Add a comment ..."/>
                       
                       {commentInput.trim() &&
                         <span onClick={addCommentInputHandler}>
                         <SendIcon className="post__send__icon"/>
                         </span>
                       }
                  </div>
              </div>
          }

        </div>
    )
}

export default Post

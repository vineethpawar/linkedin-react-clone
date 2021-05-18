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


function Feed() {
 const [sort,setSort]=useState("Top");
 const [sortshow,setSortshow]=useState(false);
const [posts,setPosts] = useState([]);

 useEffect(()=>{
    db.collection("posts").onSnapshot(snapshot => (
        setPosts(snapshot.docs.map(doc => (
            {
                id: doc.id,
                data: doc.data(),
            }
        )))
    ))
 },[])

 const sendPost = () => {
    db.collection("posts").add({
        name:"Vineeth Pawar",
        text:"This is not text",
        dpURL:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTz_Pquk1S248-28oOYSsxp-Ixg5GKF8PlCuA&usqp=CAU",
        role:"React developer",
        posted:"1 d",
        imgURL:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4FXjjJps23bFtzPWSXv2Ydp5PVgwi2rjv2w&usqp=CAU",
        likes:"352",
        hearts:"322",
        comments:"124",
        isLiked:true,
        timestamp:firebase.firestore.FieldValue.serverTimestamp(),

    });
    
 }
     
 
    return (
        <div className="feedSection">
          <div className="feed">
            <div className="feed__newpost">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSP3tO30bCeKrJ0f1-OQfselZXsYkXYl7oeyg&usqp=CAU" alt="" />
                <div className="feed__input">
                    Start a post
                </div>
            </div>
            <div className="feed__buttons"  onClick={sendPost}>
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
                     <div onClick={()=>setSort("Top")} className="feed__sort__option">Top</div>
                     <div onClick={()=>setSort("Recent")} className="feed__sort__option">Recent</div>
                 </div>
            </div>


            <div className="postContainer">
                <div className="newPostsButton"><ArrowUpwardIcon/> New posts</div>

            {posts.map(({id, data:{ name,text,dpURL,role,posted,imgURL,likes,hearts,comments,isLiked}})=>(
                    <Post key={id} dpURL={dpURL} name={name} role={role} posted={posted} text={text} imgURL={imgURL} likes={likes}   
                     hearts={hearts} comments={comments} isLiked={isLiked} />
            ))}

                
               
               

            </div>
           


        </div>
    )
}

export default Feed

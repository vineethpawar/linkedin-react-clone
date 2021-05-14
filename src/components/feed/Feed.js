import PhotoSizeSelectActualIcon from '@material-ui/icons/PhotoSizeSelectActual';
import YouTubeIcon from '@material-ui/icons/YouTube';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import VerticalSplitIcon from '@material-ui/icons/VerticalSplit';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';

import React,{useState} from 'react'
import FeedButton from "./FeedButton"
import Post from "../post/Post"
import "./Feed.css"
function Feed() {
 const [sort,setSort]=useState("Top");
 const [sortshow,setSortshow]=useState(false);
    return (
        <div className="feedSection">
          <div className="feed">
            <div className="feed__newpost">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSP3tO30bCeKrJ0f1-OQfselZXsYkXYl7oeyg&usqp=CAU" alt="" />
                <div className="feed__input">
                    Start a post
                </div>
            </div>
            <div className="feed__buttons">
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

                  <div className="feed__sort__options" style={{display:sortshow?"block":"none"}}>
                     <div onClick={()=>setSort("Top")} className="feed__sort__option">Top</div>
                     <div onClick={()=>setSort("Recent")} className="feed__sort__option">Recent</div>
                 </div>
            </div>


            <div className="postContainer">
                <div className="newPostsButton"><ArrowUpwardIcon/> New posts</div>

                <Post/>

            </div>
           


        </div>
    )
}

export default Feed

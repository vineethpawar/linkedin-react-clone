import PhotoSizeSelectActualIcon from '@material-ui/icons/PhotoSizeSelectActual';
import YouTubeIcon from '@material-ui/icons/YouTube';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import VerticalSplitIcon from '@material-ui/icons/VerticalSplit';

import React from 'react'
import FeedButton from "./FeedButton"
import "./Feed.css"
function Feed() {
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

            <div className="feed__sort">
                <div className="feed__sort__left"></div>
                <div className="feed__sort__right"></div>
            </div>





        </div>
    )
}

export default Feed

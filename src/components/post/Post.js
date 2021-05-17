
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import FavoriteIcon from '@material-ui/icons/Favorite';

import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';

import CommentOutlinedIcon from '@material-ui/icons/CommentOutlined';
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined';
import SendOutlinedIcon from '@material-ui/icons/SendOutlined';


import React from 'react'
import FeedButton from '../feed/FeedButton'
import "./Post.css"
function Post({dpURL,name,role,posted,text,imgURL,likes,hearts,comments,isLiked}) {
    return (
        <div className="post">
           <div className="post__profile__info">
                <div className="post__profile__pic">
                    <img src={dpURL} alt="" />
                </div>

                <div className="post__profile__details">
                     <div className="post__profile__name">{name}</div>
                     <div className="post__profile__role">{role}</div>
                     <div className="post__profile__updated">{posted}</div>
                </div>

               
            </div>

            <div className="post__text">
               {text}
            </div>

          <div className="post__image">
              <img src={imgURL} alt="" />
          </div>

          <div className="post__stat">
            {likes?<ThumbUpAltIcon className="post__stat__like"/>: <ThumbUpAltOutlinedIcon className="post__stat__like"/>}
             {hearts? <FavoriteIcon  className="post__stat__love"/>: <FavoriteBorderOutlinedIcon  className="post__stat__love"/>}   
               
               
               
               

                
                 <a href="" className="">{likes}</a>
                 <div className="post__stat__dot">&middot;</div>
                 <a href="" className="">{comments} commments</a>    
          </div>
          
          <div className="post__line"></div>

          <div className="post__actions">
              {isLiked?<FeedButton Icon={ThumbUpAltIcon}  color="#0a66c2" name="Liked"/>:<FeedButton Icon={ThumbUpAltOutlinedIcon}  color="grey" name="Like"/>}

                    <FeedButton Icon={CommentOutlinedIcon} color="grey" name="Comment"/>
                    <FeedButton Icon={ShareOutlinedIcon} color="grey" name="Share"/>
                    <FeedButton Icon={SendOutlinedIcon} color="grey" name="Send"/>
          </div>

        </div>
    )
}

export default Post

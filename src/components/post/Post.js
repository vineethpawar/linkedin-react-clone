
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
function Post({dpURL,name,role,posted,text,imgURL,likes,hearts,comments,isLiked,videoURL}) {
    
    const urlExtractor = (videoURL) => {
        var str = videoURL.trim();
        var first=str.lastIndexOf("/");
        var res=str.substr(first+1);
        
        if(res.includes("=")){
            first = str.indexOf("=");
         res=str.substr(first+1);
        }

        if(res.includes("&")){
          var last=res.lastIndexOf("&");
          res=str.substr(first+1,last);
        }

        return(res);
        
    }
    
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
            {likes?<ThumbUpAltIcon className="post__stat__like"/>:null}
             {hearts?<FavoriteIcon  className="post__stat__love"/>:null}   
               
              {likes+hearts?
                 <a href="" className="">{likes+hearts}</a>:null
              }

             
            {comments?   <div className="post__stat__dot">&middot;</div>:null }
            {comments?    <a href="" className="">{comments} commments</a>:null }
              
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

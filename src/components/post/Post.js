import React from 'react'
import "./Post.css"
function Post() {
    return (
        <div className="post">
           <div className="post__profile__info">
                <div className="post__profile__pic">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSP3tO30bCeKrJ0f1-OQfselZXsYkXYl7oeyg&usqp=CAU" alt="" />
                </div>

                <div className="post__profile__details">
                     <div className="post__profile__name">Arun kumar</div>
                     <div className="post__profile__role">React deveoloper</div>
                     <div className="post__profile__updated">1 d</div>
                </div>

               
            </div>

          <div className="post__image">
                    <img src="https://media-exp1.licdn.com/dms/image/C5622AQEKUNCBTEo-uA/feedshare-shrink_2048_1536/0/1620906259568?e=1623888000&v=beta&t=eNQm_IYcboMrmUrk2BrvfGHZw71zlb5JJ7-RxAFiJEI" alt="" />
         </div>

        </div>
    )
}

export default Post

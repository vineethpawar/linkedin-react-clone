import CloseIcon from '@material-ui/icons/Close';
import PhotoSizeSelectActualOutlinedIcon from '@material-ui/icons/PhotoSizeSelectActualOutlined';import YouTubeIcon from '@material-ui/icons/YouTube';
import React from 'react'
import "./ModalCreatePost.css"
function ModalCreatePost() {
    return (
        <div className="modal__createpost">
               <div className="modal__title">
                   <h3>Create a post</h3>
                    <div className="modal__close">
                    <CloseIcon className="modal__title__close"/>
                    </div>
               </div>
               <div className="modal__body">
                   <textarea type="text" name="" placeholder="What do you want to talk about?" id="" />
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
                   <div className="modal__actions__right">
                       Post
                   </div>
               </div>
        </div>
    )
}

export default ModalCreatePost

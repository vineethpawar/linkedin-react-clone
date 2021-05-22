import React from 'react'

function ModalVideoLink() {
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

export default ModalVideoLink

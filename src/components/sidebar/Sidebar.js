import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import React from 'react'
import "./Sidebar.css"
function Sidebar() {
    return (
        <div className="sidebar">

            <div className="sidebar__container">
            <div className="sidebar__background">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPxWKJuUlbrGz9cgKIp7Mi89CYluhaEJgk0Q&usqp=CAU" alt="" />
            </div>

             <img className="sidebar__dp" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSP3tO30bCeKrJ0f1-OQfselZXsYkXYl7oeyg&usqp=CAU" alt="" />

                <div className="sidebar__user__details">
                    <h3> <a href="">Vineeth pawar </a></h3>
                    <h4>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus, et.</h4>
                </div>

               <div className="sidebar__user__stats">

                    <div className="sidebar__user__stat">
                        <div className="sidebar__user__desc">
                            Who viewed your profile
                        </div>

                        <div className="sidebar__user__count">
                            156
                        </div>
                    </div>

                    <div className="sidebar__user__stat">
                        <div className="sidebar__user__desc">
                        Views on your post
                        </div>

                        <div className="sidebar__user__count">
                            156
                        </div>
                    </div>

              </div>
            </div>

            <div className="sidebar__container">
                <div className="sidebar__group__title">
                        <div className="sidebar__group__title__left">Groups</div>

                         <div className="sidebar__group__title__right">
                            <ExpandLessIcon/>
                         </div>

                </div>
            </div>
        </div>
    )
}

export default Sidebar

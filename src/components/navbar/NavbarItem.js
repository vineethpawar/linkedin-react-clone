import React from 'react'
import "./NavbarItem.css"
function NavbarItem({change,active,Icon,text,imgURL}) {
    return (
        <div onClick={()=>change(text)} className={ active===text? "navbar__item active_link":"navbar__item"} >
    { Icon && <Icon className="navbar__item__icon"/>}
    {imgURL && <img src={imgURL} className="navbar__img__icon"/>}
            <h3>{text}</h3>
            
        </div>
    )
}

export default NavbarItem

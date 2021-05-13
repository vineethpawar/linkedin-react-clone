import React from 'react'
import "./FeedButton.css"
function FeedButton({Icon,name,color,textColor}) {
    return (
        <div className="feed__button" >
         <Icon className="feed__icon" style={{color:color}}/>
            <div className="feed__name" sytle={{color:textColor}}>{name}</div>
        </div>
    )
}

export default FeedButton

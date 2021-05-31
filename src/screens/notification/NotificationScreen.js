import React from 'react'
import Notifications from '../../components/notifications/Notifications'
import "./NotificationScreen.css"
import Ad from './../../components/ad/Ad';

function NotificationScreen() {
    return (
        <div className="notification__screen">
            <div className="notification__screen__left">
                <Notifications/>
            </div>
           
            <div className="notification__screen__right">
                 <Ad />
            </div>
        
        </div>
    )
}

export default NotificationScreen

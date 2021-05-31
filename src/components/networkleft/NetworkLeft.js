import React from 'react'
import "./NetworkLeft.css"



import PersonAddIcon from '@material-ui/icons/PersonAdd';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
import PermContactCalendarIcon from '@material-ui/icons/PermContactCalendar';
import GroupIcon from '@material-ui/icons/Group';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';

import Ad from "../ad/Ad"


function NetworkLeft() {

    const networkLeftList =(Icon,name,value)=>(
        <div className="network__left__list">
         <Icon className="network__left__icon"/>
        <div className="">{name}</div>
        <div className="network__left__val">{value}</div>
    </div>
    )

    return (<div>
                <div className="network__left">
                    <div className="network__left__title">
                        <h3>Manage my network</h3>
                    </div>

                    { networkLeftList(PersonAddIcon,'Invitations',13)}
                    { networkLeftList(EmojiPeopleIcon,'Pending requests',53)}
                    { networkLeftList(SupervisedUserCircleIcon,'Recommendations',13)}
                    { networkLeftList(PermContactCalendarIcon,'Connections',13)}
                   { networkLeftList(GroupIcon,'Groups',13)}
                
                        
                
                </div>

                <Ad/>

        </div>
    )
}

export default NetworkLeft

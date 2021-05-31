import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import InsertCommentIcon from '@material-ui/icons/InsertComment';
import NotificationsIcon from '@material-ui/icons/Notifications';

import React,{useState} from 'react'
import NavbarItem from "./NavbarItem"
import "./Navbar.css"

import {Link} from 'react-router-dom';


function Navbar() {
    const [activelink,setActivelink]=useState("Jobs");
    const navlinkHandler=(ele)=>(setActivelink(ele))
    return (
    <div className="navbar">
        <div className="navbar__content">

            <div className="navbar__left">
                <img src="https://image.flaticon.com/icons/png/512/174/174857.png" alt="" />
                 <div className="navbar__left__search">
                    <SearchIcon className="icon__search"/>
                    <input type="text" placeholder="Search" name="" id="" />
                 </div>
            </div>

            <div className="navbar__right">
                
                <Link className="linkElement" to="/">
                    <NavbarItem active={activelink} change={navlinkHandler} Icon={HomeIcon} text="Home" />
                </Link>

                <Link  className="linkElement" to="/network">
                    <NavbarItem active={activelink} change={navlinkHandler} Icon={SupervisorAccountIcon} text="My Network" />
                </Link>
                 
                <Link className="linkElement"  to="/jobs">
                    <NavbarItem active={activelink} change={navlinkHandler} Icon={BusinessCenterIcon} text="Jobs" />
                </Link>


                <NavbarItem active={activelink} change={navlinkHandler} Icon={InsertCommentIcon} text="Messaging" />

                <Link className="linkElement" to="/notifications">
                    <NavbarItem active={activelink} change={navlinkHandler} Icon={NotificationsIcon} text="Notifications" />
                 </Link>

                <NavbarItem active={activelink} change={navlinkHandler} imgURL="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSP3tO30bCeKrJ0f1-OQfselZXsYkXYl7oeyg&usqp=CAU" text="Me &#x25BC;" />
            </div>
         </div>
    </div>
    )
}

export default Navbar

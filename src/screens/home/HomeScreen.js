import React from 'react'
import "./HomeScreen.css"
import Sidebar from "../../components/sidebar/Sidebar"
import Feed from "../../components/feed/Feed"
import Trending from "../../components/trending/Trending"

function HomeScreen() {


    return (
        <div className="home">
             
                
                <div className="sidebar__flex">
                <Sidebar />
                </div>

                <div className="feed__flex">
                <Feed/>
                </div>

                <div className="trending__flex">
                <Trending />
                </div> 
       



        </div>
    )
}

export default HomeScreen

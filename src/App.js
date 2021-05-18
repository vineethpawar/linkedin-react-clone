import React from 'react';
import Navbar from "./components/navbar/Navbar"
import Sidebar from "./components/sidebar/Sidebar"
import Feed from "./components/feed/Feed"
import Trending from "./components/trending/Trending"
import ModalCreatePost from "./components/modals/ModalCreatePost"
import "./App.css"

function App() {
  return (
    
    <div className="app">
      <div className="modal">
          <ModalCreatePost/>
      </div>
      <Navbar/>

      <div className="appBody">
        <div className="sidebar__flex">
        <Sidebar />
        </div>

        <div className="feed__flex">
        <Feed />
        </div>

        <div className="trending__flex">
        <Trending />
        </div>

      </div>

    </div>
  );
}

export default App;

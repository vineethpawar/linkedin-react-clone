import React,{useState} from 'react';
import Navbar from "./components/navbar/Navbar"
import Sidebar from "./components/sidebar/Sidebar"
import Feed from "./components/feed/Feed"
import Trending from "./components/trending/Trending"
import ModalCreatePost from "./components/modals/ModalCreatePost"
import "./App.css"

function App() {
  
  const [showCreatePostModal,setShowCreatePostModal]=useState(false);

  const modalCreatePostCloseHandler = () =>{
    setShowCreatePostModal(false);
  }
  const modalCreatePostOpenHandler =() => {
    setShowCreatePostModal(true);
  }

  return (
    
    <div className="app" style={showCreatePostModal?{height:"100vh",overflow:"hidden"}:null}>
      <div className="modal" style={showCreatePostModal?null:{display:"none"}}>
        
          <ModalCreatePost closeCreatePost={modalCreatePostCloseHandler} />
      </div>
      <Navbar/>

      <div className="appBody">
        <div className="sidebar__flex">
        <Sidebar />
        </div>

        <div className="feed__flex">
        <Feed openCreatePost={modalCreatePostOpenHandler}/>
        </div>

        <div className="trending__flex">
        <Trending />
        </div>

      </div>

    </div>
  );
}

export default App;

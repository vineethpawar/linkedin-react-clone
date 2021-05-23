import React,{useState} from 'react';
import Navbar from "./components/navbar/Navbar"
import ModalCreatePost from "./components/modals/ModalCreatePost"
import "./App.css"


import HomeScreen from './screens/home/HomeScreen';

function App() {
  
  const [showCreatePostModal,setShowCreatePostModal]=useState(true);

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

      
           <HomeScreen />




                {/*                    Network Screeen                   */}


                  {/* <div className="sidebar__flex">
                  <Sidebar />
                  </div>

                  <div className="feed__flex">
                  <Feed openCreatePost={modalCreatePostOpenHandler}/>
                  </div>

                  <div className="trending__flex">
                  <Trending />
                  </div> */}

                {/*                    Network Screeen                   */}






      </div>

  </div>
  );
}

export default App;

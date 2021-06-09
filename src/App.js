import React,{useState} from 'react';
import Navbar from "./components/navbar/Navbar"
import ModalCreatePost from "./components/modals/ModalCreatePost"
import "./App.css"


import HomeScreen from './screens/home/HomeScreen';
import NetworkScreen from './screens/network/NetworkScreen';
import Jobs from './screens/jobs/Jobs';
import NotificationScreen from './screens/notification/NotificationScreen';
import Auth from './screens/auth/Auth';

import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';


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

       <Auth/>

{/*        
         <Router>

            <Navbar/>

            
            <div className="appBody"> 



            <Switch>
                <Route path="/" exact component={HomeScreen} />
                <Route path="/network" exact component={NetworkScreen} />
                <Route path="/jobs" exact component={Jobs} />
                <Route path="/notifications" exact component={NotificationScreen} />
                <Route path="/signup" exact component={Auth} />
                
           </Switch>
           </div>

           
         </Router> */}
              





     

  </div>
  );
}

export default App;
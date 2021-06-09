import React from 'react'
import "./Signin.css"
import googleImg from './google.png'
function Signin() {
    return (
        <div className="signin">
                    <img  className="linkedinName" src="https://www.tmf-group.com/-/media/images/logos/case-study-logos/linkedin.png" alt="" />
           
           
          
    
            <div className="si__container">
                <h1 className="si_head">Sign in</h1>
                <p className="si_subhead">Stay updated on your professional world</p>
                <form >
    
                           
                          
    
                            <input type="email" name="" id="" placeholder="Email or Phone" required/>
    
                           
                            <input type="password" placeholder="Password" name="" id="" required/>
    
                            <button className="si_button btn_filled_blue">
                                Join
                            </button>
    
                    </form>
    
                  
    
    
                    <div className="changeAuth">
                        <h4 className="changeAuthGrey">New to Linkedin? </h4> 
                        <h4 className="changeAuthBlue"> Sign up</h4>
                    </div>
            </div>
          
    
         </div>
        )
}

export default Signin

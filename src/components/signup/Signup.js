import React from 'react'
import './Signup.css'
import googleImg from './google.png'
function Signup() {
    return (
    <div className="signup">
                <img  className="linkedinName" src="https://www.tmf-group.com/-/media/images/logos/case-study-logos/linkedin.png" alt="" />
       
       
        <div className="su__subtext">
            <h2>Make the most of your professional life</h2>
        </div>

        <div className="su__container">
            <form >

                        <p>Name</p>
                        <input type="text" name="" id="" required />

                        <p>Email or phone number</p>
                        <input type="email" name="" id="" required/>

                        <p>Password</p>
                        <input type="password" name="" id="" required/>

                        <button className="su_button btn_filled_blue">
                            Join
                        </button>

                </form>

                <div className="option">
                    <div className="line"></div>
                    <p> or</p>
                    <div className="line"></div>
                </div>


                <button className="su_button btn_outline_blue">
                <img src={googleImg} alt="" />  
                <h4> Join with Google</h4>
                </button>


                <div className="changeAuth">
                    <h4 className="changeAuthGrey">Already on Linkedin? </h4> 
                    <h4 className="changeAuthBlue"> Sign in</h4>
                </div>
        </div>
      

     </div>
    )
}

export default Signup

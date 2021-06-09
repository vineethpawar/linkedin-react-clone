import React from 'react'
import Signin from '../../components/signin/Signin'
import Signup from '../../components/signup/Signup'

function Auth() {
    return (
        <div className="auth">
            <Signup/>
            <Signin/>
        </div>
    )
}

export default Auth

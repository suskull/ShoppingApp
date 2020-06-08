import React from 'react';
import SignIn from '../sign-in/sign-in'
import SignUp from '../sign-up/sign-up'
import './signin-signup.scss'

function SignInAndSignUp() {
    return(
        <div className ='signin-signup'>
            <SignIn />
            <SignUp />
        </div>
    )
}

export default SignInAndSignUp;
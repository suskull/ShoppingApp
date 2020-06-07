import React, { Component } from 'react';
import FormInput from '../form-input/form-input';
import CustomButton from '../custom-button/custom-button';

import { signInWithGoogle } from '../../firebase/firebase.utils'

import './sign-in.scss';

class SignIn extends Component {
    constructor(props){
        super(props);

        this.state ={
            email:'',
            password: ''
        }
       
    }

    
     handleSubmit =(event) => {
        event.preventDefault();
        this.setState({email:'',password:''});

    }

     handleChange = event => {
        const {value,name} = event.target;
        this.setState({[name]:value})
    }


    render() {

    


       const {email,password} = this.state;
        return(
            <div className ='sign-in'>
                <h2 className = 'title'>I already have an acount</h2>
                <span> Sign in with your email and passowrd</span>
                
                <form onSubmit ={this.handleSubmit}  >
                    <FormInput
                    name='email' 
                    type ='email' 
                    value ={email}
                    autoComplete = 'off'
                    handleChange= {this.handleChange}
                    label = 'email'
                    
                    required 
                     />

                    <FormInput
                    name='password' 
                    type ='password' 
                    value ={password}
                    autoComplete = 'off' 
                    handleChange = {this.handleChange}
                    label ='password'
                    required 
                    />
                    <div class='buttons'>
                        <CustomButton style ={{minWidth: '50px'}}type='submit'>Sign In</CustomButton>
                        <CustomButton 
                        onClick ={signInWithGoogle}
                        isGoogleSignIn = {true}
                        >
                        {' '}Sign in with Google {' '}
                        </CustomButton>
                    </div>
                    
                </form>
            </div>
        )
    }
}

export default SignIn;
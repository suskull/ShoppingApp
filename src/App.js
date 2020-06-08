import React, { Component } from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage';
import Hats from './components/menu-item/Hats'
import Shop from './pages/shop/shop'
import Header from './components/header/header'
import SignInAngSignUp from './components/signin-signup/signin-signup'
import {Switch, Route } from 'react-router-dom';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';


class App extends Component {
  constructor(){
    super();

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      //check if there user singin, if there userAuth 
      if(userAuth) {
        //we will get back userRef  from method createUserProfileDocument from userAuth being passed in
        //if there was document there we just get back to userRef
        //if there was no docmuent we just create new object and document in firebaseutils
        //
        const userRef =  await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => { 
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }, 
          },() => {
            console.log(this.state.currentUser)
          })
        })
        
      }else{

      //if user log out we will setback current User to null(when we logout, userAuth will return null)
        this.setState({currentUser:userAuth});
      }
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
    
  render() {
    return(
      <div >
      <Header currentUser = {this.state.currentUser} />
      <Switch>
        <Route exact path = '/' component = {HomePage} />
        <Route path = '/hats' component = {Hats} />
        <Route exact path = '/shop' component = {Shop} />
        <Route exact path = '/signin' component = {SignInAngSignUp} />
      </Switch>
    </div>
  );
    }
    

  
}

export default App;

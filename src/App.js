import React, { Component } from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage';
import Shop from './pages/shop/shop'
import Header from './components/header/header'
import SignInAngSignUp from './components/signin-signup/signin-signup'
import {Switch, Route } from 'react-router-dom';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

import {connect} from 'react-redux';
import {setCurrentUser} from './redux/user/user.actions'


class App extends Component {
  

  unsubscribeFromAuth = null;

  componentDidMount() {

    const {setCurrentUser} = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      //check if there user singin, if there userAuth 
      if(userAuth) {
        //we will get back userRef  from method createUserProfileDocument from userAuth being passed in
        //if there was document there we just get back to userRef
        //if there was no docmuent we just create new object and document in firebaseutils
        //
        const userRef =  await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => { 
          setCurrentUser({
              id: snapShot.id,
              ...snapShot.data() 
          });
        });
      }
      //if user log out we will setback current User to null(when we logout, userAuth will return null)
        setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
    
  render() {
    return(
      <div >
      <Header />
      <Switch>
        <Route exact path = '/' component = {HomePage} />
        <Route exact path = '/shop' component = {Shop} />
        <Route exact path = '/signin' component = {SignInAngSignUp} />
      </Switch>
     </div>
    );
 }
    

  
}

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(null,mapDispatchToProps)(App);

import React, { Component } from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage';
import Hats from './components/menu-item/Hats'
import Shop from './pages/shop/shop'
import Header from './components/header/header'
import SignInAngSignUp from './components/signin-signup/signin-signup'
import {Switch, Route } from 'react-router-dom';
import { auth } from './firebase/firebase.utils';


class App extends Component {
  constructor(){
    super();

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({currentUser: user})
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

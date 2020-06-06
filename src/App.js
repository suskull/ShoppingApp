import React from 'react';
import './App.css';
import HomePage from './pages/homepage';
import Hats from './components/menu-item/Hats'
import {Switch, Route } from 'react-router-dom';


const Men = () => (
  <div>
    <h1>hahahaha</h1>
  </div>
);


function App() {
  return (
    <div >
      <Switch>
        <Route exact path = '/' component = {HomePage} />
        <Route path = '/hats' component = {Hats} />
        <Route path = '/men' component = {Men} />
      </Switch>
    </div>
  );
}

export default App;

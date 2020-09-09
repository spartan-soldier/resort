import React from 'react';
import './App.css';
import Home from './pages/home.component';
import Rooms from './pages/rooms.component';
import SingleRoom from './pages/single-room.component';
import Error from './pages/error.component';

import {Route,Link,Switch} from 'react-router-dom';

import Navbar from './components/navbar.component';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Switch>
        <Route exact path ='/' component = {Home}/>
        <Route exact path ='/rooms/' component = {Rooms}/>
        <Route exact path ='/rooms/:slug' component = {SingleRoom}/>
        <Route component = {Error}/>
      </Switch>
    </div>
  );
}

export default App;

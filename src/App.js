import React from 'react';
import Input from './components/Input';
import Button from './components/Button';
import Ul from './components/Ul';
import Nav from './components/Nav';
import {Route,Switch} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Todo from './components/Todo';
import User from './components/User';
import Login from './components/Login';
import Signup from './components/Signup';
import Signout from './components/Signout';


//import logo from './logo.svg';
import './App.css';
//var submit="add";

class App extends React.Component
{


  render()
  {
    //const {a}=this.state.a;
     return (
       <div className="App">
       <Nav/>
       <header className="App-header">
       <Switch>
       <Route exact path="/" component={Home}/>
        <Route exact path="/about" component={About}/>
        <Route exact path="/about/:id" component={User}/>
         <Route path="/todo" component={Todo}/>
         <Route path="/login" component={Login}/>
         <Route path="/signup" component={Signup}/>
         <Route path="/signout" component={Signout}/>
         </Switch>


       </header>
       </div>
     );

  }
}

export default App;

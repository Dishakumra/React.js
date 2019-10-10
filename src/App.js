import React from 'react';
import Input from './components/Input';
import Button from './components/Button';
import Ul from './components/Ul';
//import logo from './logo.svg';
import './App.css';
var submit="add";

class App extends React.Component
{
  state={
    a:"",
    todo:[]
  }
    handleInput=e=>{
      const value=e.target.value;
      this.setState({a:value})
    }
    addtodo=e=>{
      const{a,todo}=this.state;
      todo.push(a);
      console.log(todo);
      this.setState({todo:todo,a:" "});
    }
    deleteit=i=>{
      console.log(i);
      return()=>
      {
        const {todo}=this.state;
        todo.splice(i,1);
        console.log(todo);
        this.setState({todo:todo});

      }

    }


  render()
  {
    //const {a}=this.state.a;
     return (
       <div className="App">
       <header className="App-header">
       <Input type="text" value={this.state.a} onChange={this.handleInput}/>
       <br/>
       <Button onClick={this.addtodo} value="Add"/>
       <Ul

         inside={
         this.state.todo.map((item,i)=>
         {
       return (
         <li key={i}>{item}<Button onClick={this.deleteit(i)} value="delete"/></li>
       );
     })

       }
       />
       </header>
       </div>
     );

  }
}

export default App;

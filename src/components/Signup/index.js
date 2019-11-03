import React from 'react';

class signup extends React.Component{
  state={
    userr:"",
    pass:""
  }
  setuser=e=>{
    const value=e.target.value;
    this.setState({userr:value})
  }
  setpass=e=>{
    const value=e.target.value;
    this.setState({pass:value})
  }
  adduser=e=>{
    var obj={
      pass:this.state.pass,todo:[]
    }
    localStorage.setItem(this.state.userr,JSON.stringify(obj));
    this.setState({userr:" ",pass:" "});
  }
  render()
  {
    return(
      <div>
      <input type="text" placeholder="name" onChange={this.setuser} value={this.state.userr}/>
      <br/>
      <input type="text" placeholder="password" onChange={this.setpass} value={this.state.pass}/>
      <br/>
      <button onClick={this.adduser}>signup</button>
      </div>
    );
  }
}
export default signup;

import React from 'react';

class Login extends React.Component{
  state={
    user:"",
    pass:"",
    isLogin:false
  }
  handleInput=e=>{
    const value=e.target.value;
    this.setState({user:value})
  }
  handlePass=e=>{
    const value=e.target.value;
    this.setState({pass:value})
  }
  evaluate=e=>{
    var d=this.state.user;

    var f=localStorage.getItem(d);
    var fs=JSON.parse(f);


    if(fs.pass==this.state.pass)
    {
      this.setState({isLogin:true})
      sessionStorage.setItem("user",this.state.user);
      sessionStorage.setItem("isLogin",true);
      this.props.history.replace('/');
      console.log("donee");
    }
    else {
      alert("user does not exist");
    }

  }
  render()
  {
    return(
      <div>
      <input type="text" placeholder="name" value={this.state.user} onChange={this.handleInput}></input>
      <br/>
      <input type="text" placeholder="password" value={this.state.pass} onChange={this.handlePass}></input>
      <br/>
      <button onClick={this.evaluate}>login</button>
      </div>
    );
  }
}
export default Login;

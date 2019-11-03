import React from 'react';
class timer extends React.Component{
  constructor(props){
    super(props);
    this.state={
      date : new Date()};
  }
  componentDidMount()
  {
    this.timeId=setInterval(()=>this.tick(),1000);
  }
  componentWillUnmount()
  {
    clearInterval(this.timeId);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }
  render(){
    return(
      <div>
      <h1>HOME</h1>
      <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}
export default timer;

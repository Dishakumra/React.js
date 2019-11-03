import React from 'react';
import {Link} from 'react-router-dom';

class github extends React.Component{
  state={
    user:[]
  }
  componentDidMount()
  {
    fetch("https://api.github.com/users")
    .then(res => res.json())
      .then(
        (result) => {
          console.log(result);
          this.setState({
            user: result
          });
        },
        (error) => {
        this.setState({

          error
        });
      }
    )
  }
  //viewuser=i
  render()
  {
    console.log(this.props.match.params);
    return(

    <div>
    <ul>
    {
      this.state.user.map((item,i)=>{
        var p = '/about/' + item.id
        return (
          <li key={i}>{item.login}<Link to={p}><button>view</button></Link></li>
        );
      })
    }
    </ul>
    </div>

    );
  }
}
export default github;

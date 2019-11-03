import React from 'react';

class User extends React.Component{
  state={
    user:[]
  }
  componentDidMount(props)
  {
    //console.log(this.props.match.params);
    var g='https://api.github.com/users/'+this.props.match.params.id;
    //console.log(g);
    fetch(g)
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

  render()
  {
    //console.log(this.props.match.params);

    return(

    <div>
    <ul>
    {
      this.state.user.map((item,i)=>{

        return (
          <li key={i}>kk</li>
        );
      })
    }
    </ul>
    </div>

    );
  }
}
export default User;

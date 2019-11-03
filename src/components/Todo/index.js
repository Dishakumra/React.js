import React from 'react';

class Todo extends React.Component{
  state={
    a:"",
    todo:[]
  }
  componentDidMount()
  {
    console.log("onpage");
  //  setTimeout(()=>this.props.history.push('/about'),3000);
  }
  componentWillUnmount()
  {
    console.log("off");
  }
    handleInput=e=>{
      const value=e.target.value;
      this.setState({a:value})
    }
    addtodo=e=>{
      const{a,todo}=this.state;

      console.log(todo);
      var da=localStorage.getItem(sessionStorage.getItem("user"));
      var sa=JSON.parse(da);
      for (var i = 0; i < sa.todo.length; i++) {
  todo[i] = sa.todo[i];
}
      todo.push(a);
      var obj={
        pass:sa.pass,todo:todo
      }
      localStorage.setItem(sessionStorage.getItem("user"),JSON.stringify(obj));

      this.setState({todo:todo,a:" "});
    }
    deleteit=i=>{
      console.log(i);
      return()=>
      {
        const {todo}=this.state;
        todo.splice(i,1);
        console.log(todo);
        var da=localStorage.getItem(sessionStorage.getItem("user"));
        var sa=JSON.parse(da);
        var obj={
          pass:sa.pass,todo:todo
        }
        localStorage.setItem(sessionStorage.getItem("user"),JSON.stringify(obj));
        this.setState({todo:todo});

      }

    }
    render()
    {
      //const {a}=this.state.a;
      if(sessionStorage.getItem("isLogin"))
      {
        var d=localStorage.getItem(sessionStorage.getItem("user"));
        var s=JSON.parse(d);
        return(

          <div>
          <input type="text" value={this.state.a} onChange={this.handleInput}/>
          <br/>
          <button onClick={this.addtodo} value="Add">add</button>
          <ul>

 {
            s.todo.map((item,i)=>
            {
          return (
            <li key={i}>{item}<button onClick={this.deleteit(i)} value="delete">delete</button></li>
          );
        })
      }


          </ul>
          </div>
      )
      }
      else
      {
       return (
        <div>go to login</div>


       );
     }

    }
}
export default Todo;

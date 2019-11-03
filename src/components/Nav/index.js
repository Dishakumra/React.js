import React from 'react';
import {Link} from 'react-router-dom';
export default function()
{
  return(
    <div>
    <Link to='/'><button>home</button></Link>
    <Link to='/about'><button>about</button></Link>
    <Link to='/todo'><button>todo</button></Link>
    <Link to='/login'><button>login</button></Link>
    <Link to="/signup"><button>signup</button></Link>
    <Link to="/signout"><button>signout</button></Link>

    </div>
  )
}

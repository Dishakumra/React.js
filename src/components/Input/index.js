import React from 'react';
////import logo from './logo.svg';
//import './App.css';
export default function(props)
{
  return (
    <input onChange={props.onChange} value={props.value}/>
  )
}

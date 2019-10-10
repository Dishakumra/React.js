import React from 'react';
export default function(props)
{
  return (
    <button onClick={props.onClick}>{props.value}</button>
  )
}

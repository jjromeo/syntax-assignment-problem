import React from 'react';
import './UserOutput.css';

function UserOutput(props) {
  return(
    <div className='UserOutput'>
      <p>{props.username}</p>
      <p></p>
    </div>
  )
}

export default UserOutput;

import React from 'react';

const style = {
  borderRadius: '8px',
  height: '100px',
  fontSize: '38px'
}

function UserInput(props) {
  return(
    <div className='.UserInput'>
      <input
        style={style}
        onChange={props.handleInputChange}
        value={props.value}></input>
    </div>
  )
}

export default UserInput;

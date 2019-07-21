import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import UserOutput from './UserOutput/UserOutput';
import UserInput from './UserInput/UserInput';

function App() {
  const [ usernameState, setUsernameState ] = useState({
    username: 'jjromeo'
  })

  const inputChangeHandler = (event) => {
    setUsernameState({ username: event.target.value })
  }

  return (
    <div className="App">
    <UserInput
      handleInputChange={inputChangeHandler}
      value={usernameState.username}
    />
    <UserOutput username={usernameState.username}/>
    <UserOutput username={usernameState.username}/>
    <UserOutput username={usernameState.username}/>
    </div>
  );
}

export default App;

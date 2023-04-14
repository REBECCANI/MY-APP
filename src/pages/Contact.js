import React, { useState } from 'react';

function Forma() {
  const [name, setName] = useState('');
  const [Age, setAge] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confpassword, setConfPassword] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  }

  const handleAgeChange = (e) => {
    setAge(e.target.value);
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  }

  const handleconFPasswordChange = (e) => {
    setConfPassword(e.target.value);
  }

  const handleSubmit = (e) => {
    if (password !== confpassword) {
      alert("Password does not match")
    }
    else {
      alert('A form was submitted for:"' + name + '", Age: "' + Age + '" and Email:"' + email + '"');
    }

    e.preventDefault();
  }
  return (
    <div className='App'>
      <header className='App-Header'>
        <form onSubmit={(e) => { handleSubmit(e) }}>
          <h2> Contact Form</h2>
          <label>name: </label><br />
          <input type='text' value={name} required onChange={(e) => { handleNameChange(e) }} /><br />
          <label>Age: </label><br />
          <input type='text' value={Age} required onChange={(e) => { handleAgeChange(e) }} /><br />
          <label>email: </label><br />
          <input type='text' value={email} required onChange={(e) => { handleEmailChange(e) }} /><br />
          <label>password: </label><br />
          <input type='text' value={password} required onChange={(e) => { handlePasswordChange(e) }} /><br />
          <label>confirm Password: </label><br />
          <input type='text' value={confpassword} required onChange={(e) => { handleconFPasswordChange(e) }} /><br />
          <input type='submit' value="Submit" />
        </form>
      </header>
    </div>
  );

}

export default Forma;
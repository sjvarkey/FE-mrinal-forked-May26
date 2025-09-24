import React, { useState } from "react";

function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");

  function handleSignUp(e){
    e.preventDefault()

     console.log({
      name,
      userName,
      email,
      password
     })
  }


  return (
    <div>
      <h1>Sign Up Form</h1>
      <div>
        <label>Name</label>
        <input type="text" value={name} onChange={(e)=> setName(e.target.value)} />

        <label>User Name</label>
        <input type="text" value={userName} onChange={(e)=> setUserName(e.target.value)}  />

        <label>Email</label>
        <input type="email" value={email} onChange={(e)=> setEmail(e.target.value)} />

        <label>Password</label>
        <input type="password" value={password} onChange={(e)=> setPassword(e.target.value)} />

        <button onClick={handleSignUp}>Submit</button>
      </div>
    </div>
  );
}

export default Form;

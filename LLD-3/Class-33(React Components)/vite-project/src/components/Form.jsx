import React, { useState } from "react";

function Form() {
  const [name, setName] = useState("john");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  return (
    <div>
      <h1>Sign Up Form</h1>
      <div>
        <label>Name</label>
        <input type="text" value={name} />

        <label>User Name</label>
        <input type="text" value={userName} />

        <label>Email</label>
        <input type="email" value={email} />

        <label>Password</label>
        <input type="password" value={password} />

        <button>Submit</button>
      </div>
    </div>
  );
}

export default Form;

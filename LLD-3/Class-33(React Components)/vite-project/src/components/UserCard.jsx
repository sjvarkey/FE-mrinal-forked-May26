// Task Overview:
// Create a User Card component that:
//     Accepts a user details object (name, email, age, location, picture) as prop.
//     Displays user details in a card format.
//     Conditionally renders "Adult" or "Minor" based on age.
//     Adds a button to toggle email visibility.

import React, { useState } from "react";

import { User } from "./user.js";

function UserCard() {
  const [showEmail, setShowEmail] = useState(false);

  return (
    <div
      style={{
        border: "1px solid black",
        padding: "20px",
        borderRadius: "8px",
        textAlign: "center",
        backgroundColor: "dodgerblue",
      }}
    >
      <img style={{ borderRadius: "50%" }} src={User.picture.large} />

      <h2>
        {`{${User.name.first}}`} {User.name.last}
      </h2>

      {showEmail && <h2>{User.email}</h2>}
      <p>
        Age : {User.dob.age} ({User.dob.age >= 18 ? "Adult" : "Minor"})
      </p>

      <p>
        Location: {User.location.city} {User.location.country}
      </p>

      <button onClick={() => setShowEmail(!showEmail)}>
        {showEmail ? "hide Email" : "Show Email"}
      </button>
    </div>
  );
}

export default UserCard;

import React , {useState} from "react";

function FarenhietDisplay() {
  const [temp, setTemp] = useState(32);
  return (
    <div>
      <h3>Farenhiet Display </h3>
      <input
        type="number"
        value={temp}
        onChange={(e) => setTemp(e.target.value)}
      />

      <p>{temp} F</p>
    </div>
  );
}

export default FarenhietDisplay;
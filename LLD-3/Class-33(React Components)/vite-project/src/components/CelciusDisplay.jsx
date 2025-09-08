import React , {useState} from "react";

function CelciusDisplay() {
  const [temp, setTemp] = useState(0);
  return (
    <div>
      <h3>Celcius Display</h3>
      <input
        type="number"
        value={temp}
        onChange={(e) => setTemp(e.target.value)}
      />

      <p>{temp} C</p>
    </div>
  );
}

export default CelciusDisplay;

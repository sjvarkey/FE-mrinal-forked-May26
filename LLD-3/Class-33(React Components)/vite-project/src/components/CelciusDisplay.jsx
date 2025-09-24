import React , {useState} from "react";

function CelciusDisplay({temprature}) {
  
  return (
    <div>
      <h3>Celcius Display</h3>

      <p>{temprature} C</p>
    </div>
  );
}

export default CelciusDisplay;

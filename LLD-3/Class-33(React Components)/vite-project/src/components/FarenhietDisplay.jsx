import React , {useState} from "react";

function FarenhietDisplay({temprature}) {
   const fahrenheit = (temprature * 9) / 5 + 32;
  return (
    <div>
      <h3>Farenhiet Display </h3>
     

      <p>{fahrenheit} F</p>
    </div>
  );
}

export default FarenhietDisplay;
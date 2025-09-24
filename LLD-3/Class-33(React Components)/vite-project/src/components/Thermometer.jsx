import React , {useState} from 'react'
import CelciusDisplay from './CelciusDisplay'
import FarenhietDisplay from './FarenhietDisplay'

function Thermometer() {
  const [temp, setTemp] = useState(0);
  return (
    <div>
     <input
        type="number"
        value={temp}
        onChange={(e) => setTemp(e.target.value)}
      />
      <CelciusDisplay temprature={temp}/>
      <FarenhietDisplay temprature={temp}/>
    </div>
  )
}

export default Thermometer
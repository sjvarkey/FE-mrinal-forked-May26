import React from 'react'
import CelciusDisplay from './CelciusDisplay'
import FarenhietDisplay from './FarenhietDisplay'

function Thermometer() {
  return (
    <div>
      <CelciusDisplay/>
      <FarenhietDisplay/>
    </div>
  )
}

export default Thermometer
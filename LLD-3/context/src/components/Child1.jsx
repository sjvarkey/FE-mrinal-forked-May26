import React, { useContext } from 'react'
import { ParkContext } from './ParkContext'



function Child1() {
  const data =  useContext(ParkContext)
  return (
    <div className='children'>Child1 {data.ticketForRollerCoaster()} </div>
  )
}

export default Child1
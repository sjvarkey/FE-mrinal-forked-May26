import React from 'react'
import { useSelector } from 'react-redux'


function ShowInventory() {
  const {count} = useSelector(state=>state.counter)


  return (
    <div>
     <h1>Inventory:{count} </h1>
    </div>
  )
}

export default ShowInventory
import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <div style={{display:"flex" , gap:'20px'}}>
      <Link to='/'>Home</Link>
      <Link to='inventory'>Inventory</Link>
    </div>
  )
}

export default NavBar
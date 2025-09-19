import React from 'react'
import Child1 from './Child1'
import Child2 from './Child2'




function Parent1({rule1 , rule2 , rollerTicket , merryTicket}) {

  return (
    <>
    <div className='parent'>Parent1 RollerCoaster: {rule1} MerryGoRound: {rule2}</div>
       <Child1 rollerTicket={rollerTicket}  />
       <Child2 merryTicket={merryTicket} />
    </>
  )
}

export default Parent1
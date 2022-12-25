import React from 'react';
import DlCalculator from './dl_calculator';
import Section2 from './section-2';



function Team() {
  const session_id=localStorage.getItem("session_id")
  return (
    <>
    {(session_id===null || session_id===undefined) ? <><h1 className='my-5'>Please login to view team</h1></> : 
    <>
    
    <Section2/>
    </>
    }
    </>
  )
}

export default Team
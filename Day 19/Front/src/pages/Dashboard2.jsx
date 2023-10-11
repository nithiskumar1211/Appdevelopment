import React from 'react'
import Navbar from './Navbar'
import Slidebar from './Slidebar'
const Dashboard2 = () => {
  return (
    <>
    <div className='das1'>
       <Navbar/>
       <Slidebar/> 
       <div className="d2" style={{fontFamily:"initial"}}>Home </div>
       <div className='d3' style={{borderRadius:"20px"}}></div>
       <div className='d4' style={{borderRadius:"20px"}}></div>
       <div className='d5' style={{borderRadius:"20px"}}></div>
       <div className='d6' style={{borderRadius:"20px"}}></div>
       <div className='d7'><button style={{width:'10vw',height:"10vh",cursor:'pointer',backgroundColor:"violet",borderRadius:"10px"}}> PROJECT</button></div>
    </div>
    </>
  )
}

export default Dashboard2
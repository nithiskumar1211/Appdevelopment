import React from 'react'
import { useNavigate } from 'react-router-dom';
const Topbar = () => {
  const navigate=useNavigate();
  return (
    <>
    <div className='t'>
        <div className='t1'><img src="https://res.cloudinary.com/dwyfsuuzs/image/upload/v1695453140/harswhite2_fdmgpj.png" style={{width:'13vw',height:"20vh"}}></img></div>
        <div className='t2' style={{cursor:"pointer",color:"white"}}  onClick={()=>{navigate('/About')}}>About us </div>
        <div className='t4' style={{cursor:"pointer",color:"white"}} onClick={()=>{navigate('/Home')}}>Home </div>  
        <div className='t5' style={{cursor:"pointer",color:"white"}}  onClick={()=>{navigate('/Contact')}}>Contact us </div>
        <div className='t6' style={{cursor:"pointer",color:"white"}} onClick={()=>{navigate('/')}}>login</div>
        <div className='t3'><button style={{width:"13vw",height:"5vh",fontSize:"20px ",backgroundColor:"red",color:"whitesmoke",borderRadius:"10px",cursor:"pointer"}} onClick={()=>{navigate('/register')}}><b> Signup</b></button> </div>
        
    </div>
    </>
  )
}

export default Topbar
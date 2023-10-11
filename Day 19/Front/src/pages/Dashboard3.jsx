import React, { useState } from 'react'
import Navbar from './Navbar'
import Slidebar from './Slidebar'
import { Navigate, useNavigate } from 'react-router-dom'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { useDispatch } from 'react-redux';
import { addproj } from '../components/Redux/Userslice';
const Dashboard3= () => {
  const navigate=useNavigate();
  const dispatch=useDispatch();

const [addpro,setAddpro]=useState({
  projectname:'',startdate:'',enddate:''
});
const handleChange=(e)=>{
  setAddpro({...addpro,[e.target.id]:e.target.value});
}

const handleSubmit=(e)=>{
  dispatch(addproj(addpro));
}
  return (
    <>
    <div className='das1'>
       <Navbar/>
       <Slidebar/> 
       <div className='das8'>Project of the given Scenerio</div>
       <div className='ds1' style={{borderRadius:"10px"}}>
        <div className='task' style={{fontSize:'20px'}}>
        <center>
        <div className='task1'><input type =" text" id='projectname' onChange={handleChange}  placeholder="Project Name" style={{width:'17vw',height:"4vh"}}></input> <br></br></div>
        <div className='task2'><input type =" text" id='startdate' onChange={handleChange}  placeholder="Start Date"  style={{width:'17vw',height:"4vh"}}></input><br></br></div>
        <div className='task3'><input type =" text" id='enddate'  onChange={handleChange} placeholder="End Date"  style={{width:' 17vw',height:"4vh"}}></input><br></br></div>
        <br></br>
        <div className='task4'><button style={{
            width: "15vw",
            height: "5vh",
            fontSize: "20px ",
            backgroundColor: "darkviolet",
            color: "whitesmoke",
            borderRadius: "10px",
            cursor: "pointer",
          }}  onClick={handleSubmit} >Store</button></div>
        
        </center>
        </div>
       </div>
       
       </div>
    
    </>
  )
}

export default Dashboard3
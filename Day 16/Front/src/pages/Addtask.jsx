import React, { useState } from 'react'
import Navbar from './Navbar'
import Slidebar from './Slidebar'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addproj } from '../components/Redux/Userslice';

const Addtask = () => {
    const navigate=useNavigate  ();
    const dispatch=useDispatch();
    const [addproj,setAddpro]=useState({
        taskname:'',startdate:'',enddate:'',Description:''
      });
      const handleChange=(e)=>{
        setAddpro({...addproj,[e.target.id]:e.target.value});
      }
      
      const handleSubmit=(e)=>{
        console.log(addproj);
        dispatch(addproj(addproj));
      }
  return (
    <>
    <div>
        <Navbar/>
        <Slidebar/>
        <div className='at'><h1>AddTask</h1></div>
        <div className='at1'>
            <center>
        <div className='at2'><input type="text " placeholder='TaskName'  style={{width:'17vw',height:"4vh"}} ></input></div><br></br>
        <div className='at3'><input type="text" placeholder='Startdate'  style={{width:'17vw',height:"4vh"}}></input></div><br></br>
        <div className='at4'><input type="text" placeholder='EndDate'  style={{width:'17vw',height:"4vh"}}></input></div><br></br>
        <div className='at5'><input type="text" placeholder='Description'  style={{width:'17vw',height:"4vh"}}></input></div>
        <div className='at6'><button style={{width:'8vw',height:"5vh",cursor:'pointer',backgroundColor:"violet"}} onClick={()=>{navigate("/dashboard4")}}>Assign</button></div>
        </center>
        </div>
    </div>
    </>
  )
}

export default Addtask
import React from 'react'
import { useNavigate } from 'react-router-dom';
import DashboardIcon from '@mui/icons-material/Dashboard';
import {Link} from "react-router-dom"
import LogoutIcon from '@mui/icons-material/Logout';
import TaskIcon from '@mui/icons-material/Task';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import DynamicFeedIcon from '@mui/icons-material/DynamicFeed';

const Slidebar = () => {
    const navigate=useNavigate();
  return (
    <>
    <div className='sli'><div className='s1'></div>
    <div className='sli2'> <h onClick={()=>{navigate('/Dashboard2')}} style={{border:'None',width:"8vw",height:"6vh",color:'white',cursor:'pointer'}}>Home </h><DashboardIcon style={{width:'3vw',height:"3vh",color:"green"}}/></div><br></br>
    <div className='sli3'><h onClick={()=>{navigate('/Dashboard3')}} style={{width:"12vw",height:"6vh",color:'white',cursor:'pointer'}}>Project</h><DynamicFeedIcon style={{width:'3vw',height:"3vh",color:"skyblue"}}/></div><br></br>
    <div className='sli4'><h onClick={()=>{navigate('/Dashboard4')}} style={{width:"12vw",height:"6vh",color:'white',cursor:'pointer'}}>Task</h><TaskIcon style={{width:'3vw',height:"3vh",color:"orange"}}/></div>
    <div className='sli6'><h onClick={()=>{navigate('/Dashboard5')}} style={{width:"12vw",height:"6vh",color:'white',cursor:'pointer'}}>Calender</h><CalendarMonthIcon style={{width:'3vw',height:"3vh",color:"lightgreen"}}/></div>
    <div className='sli7'><h onClick={()=>{navigate('/Dashboard6')}} style={{width:"12vw",height:"6vh",color:'white',cursor:'pointer'}}>Team</h><Diversity3Icon style={{width:'3vw',height:"3vh",color:"pink"}}/></div>
    <div className='sli8'><h onClick={()=>{navigate('/Dashboard7')}} style={{width:"12vw",height:"6vh",color:'white',cursor:'pointer'}}>Time Sheet</h><WorkHistoryIcon style={{width:'3vw',height:"3vh",color:"yellow"}}/></div>
    <div className='sli5'><img src='https://res.cloudinary.com/dwyfsuuzs/image/upload/v1695311941/nithi2_r5fugs.png' style={{width:'11vw',height:''}}/></div>
    <div className='sli9' onClick={()=>{navigate('/')}} style={{cursor:"pointer",color:'skyblue',fontSize:"23px"}}>Logout <LogoutIcon className='sli0' style={{ color:"skyblue"}}/> </div>
    </div>
    </>
  )
}

export default Slidebar
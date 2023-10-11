import React, { useState } from 'react'
import Navbar from './Navbar'
import Slidebar from './Slidebar'
import { Navigate, useNavigate } from 'react-router-dom'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { useDispatch, useSelector } from 'react-redux';
import { addproj } from '../components/Redux/Userslice';
import { getproj, removeproj } from "../components/Redux/Userslice";
const Dashboard3= () => {
  const proj = useSelector(getproj);
  console.log(proj[0]?.projectname);
  const dispatch=useDispatch();
  const navigate=useNavigate();


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
    <div className='r'>
       <Navbar/>
       <Slidebar/> 
       <div className='r1' style={{color:"red"}}>{proj[0]?.projectname}</div>
       <div className='r2'><button className="r3"style={{width:"10vw",height:"8vh",backgroundColor:"pink",cursor:"pointer"}} onClick={()=>navigate('/addtask')}><b style={{fontSize:"18px"}} >ADD TASK</b></button></div>
       <table className="r4">
              <tr>
                <th  className="time1"style={{fontSize:'40px',color:"black"}}>TaskName</th>
                <th  className="time2"style={{fontSize:'40px' ,color:"black"}}>StartDate</th>
                <th  className="time3"style={{fontSize:'40px',color:"black"}}>EndDate</th>
                <th  className="time4"style={{fontSize:'40px',color:"black"}}>Description</th>
              </tr>
              <tbody style={{textAlign:"center"}}>
                {proj.map((Task,i) => (
                  <tr>
                    <td className="time1"style={{fontSize:'40px',color:"black"}}>{Task.TaskName}</td>
                    <td className="time1"style={{fontSize:'40px',color:"black"}}>{Task.Startdate}</td>
                  <td className="time1"style={{fontSize:'40px',color:"black"}}>{Task.TEndDate}</td>
                    <td className="time1"style={{fontSize:'40px',color:"black"}}>{Task.Description}</td>
                  </tr>
                ))}
              </tbody>
              </table>
      

          

       
      
       </div>
       
      
    
    </>
  )
}

export default Dashboard3
import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import MessageSharpIcon from '@mui/icons-material/MessageSharp';
import {Link, useNavigate} from "react-router-dom";
import {useSelector} from "react-redux"
import { selectUser } from '../components/Redux/Userslice';

const Navbar = () => {
  const navigate=useNavigate();
  const user=useSelector(selectUser)
  return (
    <>
    <div className='nav'>
    <div className='nave'></div>
    <div className='nav2'><input type=" " placeholder='Search' style={{borderRadius:"10px",width:"27vw",height:"5vh"}}></input><SearchIcon className='nav1'/></div>
    <div className='nav3' >{user?user.email:'user'}</div>
    <NotificationsActiveIcon className='nav4'/>
    <MessageSharpIcon className='nav5'/>
    <div className='nav6' ><img src=" https://tse1.mm.bing.net/th?id=OIP.SEAuW0VAQznR7YDaVTcEIQAAAA&pid=Api&P=0&h=180 " style={{width:"3vw",height:'5vh',borderRadius:"20px",cursor:"pointer"}} onClick={()=>{navigate('/Navbar1')}}/></div>
    
 

    </div>
    </>
  )
}

export default Navbar
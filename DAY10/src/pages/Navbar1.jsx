import React from 'react'
import Navbar from './Navbar'
import Slidebar from './Slidebar'
import SettingsIcon from '@mui/icons-material/Settings';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import { useNavigate } from 'react-router-dom';
const Navbar1 = () => {
    const navigate=useNavigate();
  return (
    <>
    <div className='n1'>
       <Navbar/>
       <Slidebar/> 
       <div className="n2">
        <div className='n3'><img src='https://tse1.mm.bing.net/th?id=OIP.SEAuW0VAQznR7YDaVTcEIQAAAA&pid=Api&P=0&h=180' style={{width:'4vw',heigth:'3vh',borderRadius:"60px"}} onClick={()=>{navigate('/Dashboard')}}></img></div>
        <div className='n4' >Nithis kumar(Admin)</div>
        <div className='n5'>Profile <div className='n66'><ManageAccountsIcon  style={{width:"1vw"}}/></div></div>
        <div className='n6'>Setting  <div className='n66'><SettingsIcon style={{width:"1vw"}}/></div></div>
        <div className='n7' onClick={()=>{navigate('/register')}}>SignOut <div className='n66' style={{cursor:"pointer"}}><ExitToAppIcon  style={{width:"1vw"}} /></div></div>
        <div className='n8'> Need help?</div>
        </div>
    </div>
    </>
  )
}

export default Navbar1
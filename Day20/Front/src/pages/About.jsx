import React from 'react'
import Topbar from './Topbar'
import { Down } from './Down'
import { useNavigate } from 'react-router-dom'
import LocalCafeIcon from '@mui/icons-material/LocalCafe';
import Groups2Icon from '@mui/icons-material/Groups2';
import MarkChatReadIcon from '@mui/icons-material/MarkChatRead';

const About = () => {
  const navigate=useNavigate();
  return (
    <div>
        <Topbar/>
        <div className='a'>
          <div className='ab1'><img src="https://img.freepik.com/free-photo/business-presentation_53876-167156.jpg?size=626&ext=jpg&ga=GA1.1.269377609.1686319445&semt=ais"  style={{width:'76.2vw',height:"70vh"}}/></div><br></br>
          <div className='ab2'><h1>About our Project Management Tool</h1></div><br></br>
          <div className='ab3'><h style={{fontSize:"20px"}}>Task terk is a Project management company located in Bangalore. We help clients globally manage their<br></br> resources by providing a SaaS hosted resource scheduling solution. Task Terk is<br></br> the result of over 15 years of digital management experience and is helping businesses move<br></br> from spreadsheets or over complicated software to a real Project planning tool.</h></div><br></br>
          <div className='ab2'><h1>We Love To Work & We Love Where We Work</h1></div><br></br>
          <div className='ab4'><h style={{fontSize:"20px"}}>We are centrally located in the center of Bangalore City. Our offices are located on the 3rd floor of <br></br>the KG8 building. Our environment is a clean open working space with some small office<br></br> pockets. There is a social vibe around our floor as the office space has other cool<br></br> companies sharing the kitchens.</h></div><br></br>
        <div className='ab5'><button style={{width:"13vw",height:"5vh",fontSize:"20px ",backgroundColor:"red",color:"whitesmoke",borderRadius:"10px",cursor:"pointer"}} onClick={()=>{navigate('/register')}}>Contact us</button></div><br></br>
        <div className='ab6'><h1>Our Location</h1></div>
        <div className='ab7'><img src="https://media.istockphoto.com/id/1399525644/photo/world-map-vr-glasses-virtual-navigation-capital-map-technology-travel-planning-3d-illustration.webp?b=1&s=170667a&w=0&k=20&c=Elce0JJw4DT85LGTIp3tJ-Tt0W8oB25Lst3F8NBAIIk="  style={{width:'55vw',height:"55vh"}}/></div><br></br>
        <p className='ab8' style={{fontSize:"28px"}}>Located in Beautiful Bangalore city</p>
        <div className='ab9'>
        <h style={{fontSize:'22px'}}>Bangalore,8 Street GandhiPark</h><br></br>
        <h style={{fontSize:'22px'}} >EMAIL:   <a style={{color:"Skyblue",cursor:"pointer"}}>nithishkumarn248@gmail.com</a></h><br></br>
        <h style={{fontSize:'22px'}}>WEB:  <a style={{color:"skyblue",cursor:"pointer"}}>https//abc.com</a></h><br></br>
        <div className='ab10'><h1 style={{fontSize:"45px"}}>Task Terk is Built On</h1></div><br></br>
        <div className="ab11" style={{fontSize:"40px",color:"orange"}}><h className="ab12"><MarkChatReadIcon style={{width:"5vw",height:'10vh',color:'orange'}}/>%36728 Hours Of Development</h><br></br>
        <h className="ab13  "><LocalCafeIcon style={{width:"5vw",height:'10vh',color:'orange'}}/>8000 Cups Of Streaming</h><br></br>
        <h className="ab14"><Groups2Icon style={{width:"5vw",height:'10vh',color:'orange'}}/>15 Years Of Management Experience</h><h></h>
        </div>
        </div>
        
        </div>
        <Down/>

    </div>
  )
}

export default About
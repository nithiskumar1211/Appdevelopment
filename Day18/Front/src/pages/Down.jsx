import React from 'react'
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import LanguageIcon from "@mui/icons-material/Language";
import { useNavigate } from 'react-router-dom';

export const Down = () => {
    const navigate=useNavigate();
  return (
    <div>
        <div className="pri8">
      <img src="https://res.cloudinary.com/dwyfsuuzs/image/upload/v1695453140/harswhite2_fdmgpj.png" style={{width:'17vw',height:"25vh"}}></img>
      <div className="pri9"> <h4 style={{fontSize:'23px',color:"black"}}>Features</h4>
      <h style={{fontSize:'17px',color:"white"}}>Blog</h>
      <h style={{fontSize:'17px',color:"white"}}>Coummunity</h>
      </div>
      <div className="pri10"> <h4 style={{fontSize:'23px',color:"black"}}>Apps</h4>
      <h style={{fontSize:'17px',color:"white"}}>Mobile Apps</h>
      <h style={{fontSize:'17px',color:"white"}}>G Suite Integeration</h>
      <h style={{fontSize:'17px',color:"white"}}>Microsoft Office</h>
      <h style={{fontSize:'17px',color:"white"}}>Apps for Apple Watch</h>
      <h style={{fontSize:'17px',color:"white"}}>Time Sheets</h>
      <h style={{fontSize:'17px',color:"white"}}>Reports</h>
      <h style={{fontSize:'17px',color:"white"}}>Dashboard</h>
      <h style={{fontSize:'17px',color:"white"}}>Scrum software</h>
      </div>
      <div className="pri11"><h4 style={{fontSize:'23px',color:"black"}}>Resources</h4>
      <h style={{fontSize:'17px',color:"white"}} >Zia</h>
      <h style={{fontSize:'17px',color:"white"}}>Support</h>
      <h style={{fontSize:'17px',color:"white"}}>Community</h>
      <h style={{fontSize:'17px',color:"white"}}>Formus</h>
      <h style={{fontSize:'17px',color:"white"}}>Blogs</h>
      <h style={{fontSize:'17px',color:"white"}}>Academy</h>
      </div>
      <div className="pri12"><h4 style={{fontSize:'23px',color:"black"}}> Partners</h4>
      <h  style={{fontSize:'17px',color:"white"}}>Hosting Providers</h>
      <h  style={{fontSize:'17px',color:"white"}}>Partners</h>
      <h  style={{fontSize:'17px',color:"white"}}>consulting Partners</h>
      <h  style={{fontSize:'17px',color:"white"}}>Platform Partners</h>
      <h  style={{fontSize:'17px',color:"white"}}>Technology  Partners</h>
      </div>
      <div className="pri13"><h4 style={{fontSize:'23px',color:"black"}}> Apps </h4>
      <h style={{fontSize:'17px',color:"white",cursor:"Pointer"}}>Mobile Apps</h>
      <h style={{fontSize:'17px',color:"white"}}>G Suite Integeration</h>
      <h style={{fontSize:'17px',color:"white"}}>Microsoft Office</h>
      <h style={{fontSize:'17px',color:"white"}}>Apps for Apple Watch</h>
      <h  style={{fontSize:'17px',color:"white"}}>Time Sheets</h>
      <h  style={{fontSize:'17px',color:"white"}}>Reports</h>
      <h  style={{fontSize:'17px',color:"white"}}>Dashboard</h>
      <h  style={{fontSize:'17px',color:"white"}}>Scrum software</h>
      </div>
      <div className="h13">
        <b style={{ fontSize: "25px", top: "10px" }}>Follow</b>{" "}
        <a  href="https://www.instagram.com/" target="_blank" rel="facebook">
        <InstagramIcon
          style={{
            color:"black",
            width: "5vw",
            height: "5vh",
            cursor: "pointer",
          }}
        />
        </a>
        <a  href="https://www.linkedin.com/" target="_blank" rel="facebook">
        <LinkedInIcon
          style={{
            color: "black",
            width: "3vw",
            height: "5vh",
            cursor: "pointer",
          
          }}
        />
        </a>
        <a  href="https://www.facebook.com/" target="_blank" rel="facebook">

        <FacebookIcon
          style={{
            color: "black",
            width: "5vw",
            height: "5vh",
            cursor: "pointer",
          }}
          />
          </a>
      </div>
    </div>
    <h className="pri0" style={{ cursor: "pointer" }}>
        English(united States)
        <LanguageIcon className="pri00" />
      </h>
      <a className="pri" style={{ cursor: "pointer" }}onClick={()=>{navigate('/privacy')}}>
        Privacy
      </a>
      <a className="pri1" style={{ cursor: "pointer" }}onClick={()=>{navigate('/terms')}}>
        Term of Conditions
      </a>
      {/* <a className="pri2" style={{ cursor: "pointer" }}onClick={()=>{navigate('/privacy')}}>
        safety and co
      </a> */}
      <a className="pri3" style={{ cursor: "pointer" }}onClick={()=>{navigate('/About')}}>
        About us
      </a>
      <a className="pri4" style={{ cursor: "pointer" }}onClick={()=>{navigate('/Contact')}}>
        Contact
      </a>
      {/* <a className="pri5" style={{ cursor: "pointer" }}onClick={()=>{navigate('/privacy')}}>
        feedback
      </a> */}
      {/* <a className="pri6" style={{ cursor: "pointer" }}onClick={()=>{navigate('/privacy')}}>
        Need help
      </a> */}
      <a className="pri7" style={{ cursor: "pointer" }}onClick={()=>{navigate('/frequent')}}>
        FAQ
      </a>
      <h className="pri14" style={{ cursor: "pointer" }}>
        @2023,Task Terk Pvt.Ltd.All Rights Reserved.
      </h>
    </div>
  )
}

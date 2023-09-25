import React from "react";
import Topbar from "./Topbar";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import LanguageIcon from "@mui/icons-material/Language";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="homebody">
      <Topbar />
      <div className="h">
        <b style={{ fontSize: "60px", fontFamily: "" }}>
          PROJECT<br></br> MANAGEMENT
        </b>
      </div>
      <div className="h1" style={{ fontSize: "30px" }}>
        Time to get organised
      </div>
      <div className="h2" style={{ fontSize: "20px" }}>
        A single source of truth for managing the entire<bR></bR>
        project and task lifecycle trusted <br></br>by 1.5 million developers
        and 10,000<br></br> enterprise and hyper-growth companies
      </div>
      <div className="h3">
        <img src="https://res.cloudinary.com/dwyfsuuzs/image/upload/v1695366326/home_gojzbc.jpg" />
      </div>
      <div className="h4">
        <button
          type="button"
          style={{
            width: "15vw",
            height: "5vh",
            fontSize: "20px ",
            backgroundColor: "darkviolet",
            color: "whitesmoke",
            borderRadius: "10px",
          }}
        >
          <b
            style={{ fontSize: "20px",cursor:"pointer" }}
            onClick={() => {
              navigate("/register");
            }}
          >
            Get started
          </b>
        </button>
      </div>
      <div className="h5" style={{ fontSize: "40px" }}>
        The power to make project management simple
      </div>
      <div className="h6" style={{ cursor: "-webkit-grab" }}>
        <h className="h666" style={{ fontSize: "18px" }}>
          Work confidently with a powerful project management<br></br> tool that
          makes getting started and managing projects both simple and easy.
        </h>
      </div>
      <div className="h66" style={{ fontSize: "28px" }}>
        Take the pain out of painstaking projects
      </div>
      <div className="h7" style={{ cursor: "-webkit-grab" }}>
        <h className="h666" style={{ fontSize: "18px" }}>
          Even complex projects are easier to manage<br></br> when you can
          choose methods and tools<br></br> that best suit your needs.
        </h>
      </div>
      <div className="h77" style={{ fontSize: "28px" }}>
        Easy to start, simple to use, and vice versa
      </div>
      <div className="h8" style={{ cursor: "-webkit-grab" }}>
        <h className="h666" style={{ fontSize: "18px" }}>
          Use Project and Teams to empower collaboration and management of
          projects, including file sharing, chats, meetings, and more.
        </h>
      </div>
      <div className="h88" style={{ fontSize: "28px" }}>
        Microsoft project and Microsoft Teams.
      </div>
      <div className="h9" style={{ cursor: "-webkit-grab" }}>
        <h className="h666" style={{ fontSize: "18px" }}>
          Collaborate on projects even when you’re on different continents.
          Enable all team members to update tasks simultaneously so you can get
          more done together.
        </h>
      </div>
      <div className="h99" style={{ fontSize: "28px" }}>
        Work hand in Hand without being side by side
      </div>
      <div className="h10" style={{ fontSize: "40px" }}>
        Wield the power to innovate
      </div>
      <div className="h100" style={{ cursor: "-webkit-grab" }}>
        <h className="h1000" style={{ fontSize: "18px" }}>
          Build the desktop or mobile experiences you <br></br>want and easily
          create automated workflows. <br></br>All with a flexible, secure
          platform built on Azure,<br></br> the world’s trusted enterprise
          cloud.
        </h>
      </div>
      <div className="h11">
        <img
          src="https://res.cloudinary.com/dwyfsuuzs/image/upload/v1695404329/sh_tnzebw.png"
          style={{
            width: "50vw",
            height: "60vh",
            borderRadius: "10px",
            cursor: "pointer",
          }}
        ></img>
      </div>
      <div className="h12" style={{ fontSize: "40px" }}>
        Get started using Project<br></br>
        <button
          className="h122"
          style={{
            width: "15vw",
            height: "5vh",
            fontSize: "20px ",
            backgroundColor: "darkviolet",
            color: "whitesmoke",
            borderRadius: "10px",
            cursor: "pointer",
          }}
          onClick={() => {
            navigate("/register");
          }}
        >
          <b>Get started</b>
        </button>
      </div>
   

      
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
      <a className="pri" style={{ cursor: "pointer" }} onClick={()=>{navigate('/privacy')}}>
        Privacy
      </a>
      <a className="pri1" style={{ cursor: "pointer" }}  onClick={()=>{navigate('/terms')}}>
        Term of Conditions
      </a>
      {/* <a className="pri2" style={{ cursor: "pointer" }}  onClick={()=>{navigate('/')}}>
        safety and co
      </a> */}
      <a className="pri3" style={{ cursor: "pointer" }}  onClick={()=>{navigate('/About')}}>
        About us
      </a>
      <a className="pri4" style={{ cursor: "pointer" }}  onClick={()=>{navigate('/contact')}}>
        Contact
      </a>
      {/* <a className="pri5" style={{ cursor: "pointer" }}  onClick={()=>{navigate('/')}}>
        feedback
      </a> */}
      {/* <a className="pri6" style={{ cursor: "pointer" }}  onClick={()=>{navigate('/')}}>
        Need help
      </a> */}
      <a className="pri7" style={{ cursor: "pointer" }}  onClick={()=>{navigate('/frequent')}}>
        FAQ
      </a>
      <a className="pri14" style={{ cursor: "pointer" }}  onClick={()=>{navigate('/')}}>
        @2023,Task Terk Pvt.Ltd.All Rights Reserved.
      </a>
    
    </div>
  );
};

export default Home;

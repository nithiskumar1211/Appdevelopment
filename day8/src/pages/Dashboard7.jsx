import React from "react";
import Navbar from "./Navbar";
import Slidebar from "./Slidebar";
import { useDispatch, useSelector } from "react-redux";
import { getproj, removeproj } from "../components/Redux/Userslice";
const Dashboard7 = () => {
  const proj = useSelector(getproj);
  const dispatch = useDispatch();
  return (
    <>
      <div className="das1">
        <Navbar />
        <Slidebar />
        <div className="sil">
          <div className="time">
            <table className="tb">
              <tr>
                <th  className="time1"style={{fontSize:'40px',color:"black"}}>Project Name</th>
                <th  className="time2"style={{fontSize:'40px' ,color:"black"}}>Start Date</th>
                <th  className="time3"style={{fontSize:'40px',color:"black"}}>End Date</th>
                <th  className="time4"style={{fontSize:'40px',color:"black"}}>Action</th>
              </tr>
              <tbody style={{textAlign:'center'}}>
              {proj.map((project,i) => (
                <tr>
                  <td  className="time5"style={{fontSize:'30px',color:"white"}}>{project.projectname}</td>
                  <td className="time6"style={{fontSize:'30px',color:"white"}}>{project.startdate}</td>
                  <td className="time7"style={{fontSize:'30px',color:"white"}}>{project.enddate}</td>
                  <td className="time8" style={{fontSize:'30px',color:"white"}}onClick={()=>dispatch(removeproj(i))}><button style={{width:"8vw",height:"4vh",cursor:"pointer",backgroundColor:"darkviolet",color:"white",fontsize:'25px'}}>Delete</button></td>
                </tr>
              ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard7;

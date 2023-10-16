import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Slidebar from "./Slidebar";
import { Navigate, useNavigate } from "react-router-dom";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { useDispatch, useSelector } from "react-redux";
import { addproj } from "../components/Redux/Userslice";
import { getproj, removeproj } from "../components/Redux/Userslice";
import Taskservice from "../services/Taskservice";
const Dashboard3 = () => {
  const proj = useSelector(getproj);
  console.log(proj[0]?.projectname);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [tasks, setTasks] = useState([]);
  const handleDelete = async(tid) =>{
    await Taskservice.deleteTask(tid).then((response)=>{
      getTask();
    }).catch((error)=>{
      console.log(error);
    })
  }
  const getTask = async () => {
    await Taskservice.getTasks()
      .then((response) => {
        setTasks(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    getTask();
  },[]);

  return (
    <>
      <div className="r">
        <Navbar />
        <Slidebar />
        <div className="r1" style={{ color: "red" }}>
          {proj[0]?.projectName}
        </div>
        <div className="r2">
          <button
            className="r3"
            style={{
              width: "10vw",
              height: "8vh",
              backgroundColor: "pink",
              cursor: "pointer",
            }}
            onClick={() => navigate("/addtask")}
          >
            <b style={{ fontSize: "18px" }}>ADD TASK</b>
          </button>
        </div>
        <table  style={{width:'100%'}} className="r4">
          <tr>
            <th  style={{ fontSize: "40px", color: "black" }}>
              TaskName
            </th>

            <th  style={{ fontSize: "40px", color: "black" }}>
              StartDate
            </th>
            <th  style={{ fontSize: "40px", color: "black" }}>
              EndDate
            </th>
            <th  style={{ fontSize: "40px", color: "black" }}>
              Action
            </th>
          </tr>
          <tbody style={{ textAlign: "center" }}>
            {tasks.map((Task, i) => (
              <tr>
                <td
                  // className="time1"
                  style={{ fontSize: "40px", color: "black" }}
                >
                  {Task.taskName}
                </td>
                <td
                  // className="time1"
                  style={{ fontSize: "40px", color: "black" }}
                >
                  {Task.startDate}
                </td>
                <td
                  // className="time1"
                  style={{ fontSize: "40px", color: "black" }}
                >
                  {Task.endDate}
                </td>
                <td
                  // className="time1"
                  style={{ fontSize: "40px", color: "black" }}
                >
                  <button onClick={()=>handleDelete(Task?.tid)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Dashboard3;

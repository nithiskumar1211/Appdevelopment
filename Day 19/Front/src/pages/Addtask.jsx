import React, { useState } from "react";
import Navbar from "./Navbar";
import Slidebar from "./Slidebar";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addproj } from "../components/Redux/Userslice";
import Taskservice from "../services/Taskservice";

const Addtask = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [addTask, setAddTask] = useState({
    taskName: "",
    startDate: "",
    endDate: "",
  });
  const [calendar, setCalendar] = useState({
    taskName: "",
    taskStartDate: "",
    taskEndDate: "",
  });
  const [report, setReport] = useState({
    name: "",
    startDate: "",
    endDate: "",
  });
  const [projectId, setProjectId] = useState();
  const handleChangeTask = (e) => {
    setAddTask({ ...addTask, [e.target.name]: e.target.value });
  };
  const handleChangeCalendar = (e) => {
    setCalendar({ ...calendar, [e.target.name]: e.target.value });
  };
  const handleChangeReport = (e) => {
    setReport({ ...report, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await Taskservice.addTask(
      {
        ...addTask,
        calendar:{...calendar, report: { ...report } },
      },
      projectId
    )
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
    dispatch(addproj(addproj));
  };
  return (
    <>
      <div>
        <Navbar />
        <Slidebar />
        <div className="at1">
          <center>
            <div className="at">
              <b style={{ fontSize: "30px" }}>Calendar</b>
            </div>
            <div className="at2">
              <input
                type="text "
                name="taskName"
                placeholder="taskName"
                onChange={handleChangeCalendar}
                style={{ width: "17vw", height: "4vh" }}
              ></input>
            </div>
            <br></br>
            <div className="at3">
              <input
                type="text"
                name="taskStartDate"
                placeholder="taskStartDate"
                onChange={handleChangeCalendar}
                style={{ width: "17vw", height: "4vh" }}
              ></input>
            </div>
            <br></br>
            <div className="at4">
              <input
                type="text"
                name="taskEndDate"
                placeholder="taskEndDate"
                onChange={handleChangeCalendar}
                style={{ width: "17vw", height: "4vh" }}
              ></input>
            </div>
            <br></br>
            <div className="at6">
              <button
                style={{
                  width: "8vw",
                  height: "5vh",
                  cursor: "pointer",
                  backgroundColor: "violet",
                }}
                onClick={handleSubmit}
              >
                Assign
              </button>
            </div>
          </center>
        </div>
        <div className="bt1">
          <center>
            <div className="nithis">
              <b style={{ fontSize: "30px" }}>Add Task</b>
            </div>
            <div className="at2">
              <input
                onChange={handleChangeTask}
                type="text "
                name="taskName"
                placeholder="taskName"
                style={{ width: "17vw", height: "4vh" }}
              ></input>
            </div>
            <br></br>
            <div className="at3">
              <input
                onChange={handleChangeTask}
                type="text"
                name="startDate"
                placeholder="startDate"
                style={{ width: "17vw", height: "4vh" }}
              ></input>
            </div>
            <br></br>
            <div className="at4">
              <input
                onChange={handleChangeTask}
                type="text"
                name="endDate"
                placeholder="endDate"
                style={{ width: "17vw", height: "4vh" }}
              ></input>
            </div>
            <br></br>
            <div className="at4">
              <input
                onChange={(e) => setProjectId(e.target.value)}
                type="text"
                name="Projectid"
                placeholder="Projectid"
                style={{ width: "17vw", height: "4vh" }}
              ></input>
            </div>
            <br></br>
            {/* <div className='at5'><input type="text" placeholder='Description'  style={{width:'17vw',height:"4vh"}}></input></div> */}
            {/* <div className='at7'><button style={{width:'8vw',height:"5vh",cursor:'pointer',backgroundColor:"violet"}} onClick={()=>{navigate("/dashboard4")}}>Assign</button></div> */}
          </center>
        </div>
        <div className="ct1">
          <center>
            <div className="buddy">
              <b style={{ fontSize: "30px" }}>Report</b>
            </div>
            <div className="at2">
              <input
                onChange={handleChangeReport}
                type="text"
                name="name"
                placeholder="name"
                style={{ width: "17vw", height: "4vh" }}
              ></input>
            </div>
            <br></br>
            <div className="at3">
              <input
                onChange={handleChangeReport}
                type="text"
                name="startDate"
                placeholder="Percentage"
                style={{ width: "17vw", height: "4vh" }}
              ></input>
            </div>
            <br></br>
            <div className="at4">
              <input
                onChange={handleChangeReport}
                type="text"
                name="endDate"
                placeholder="endDate"
                style={{ width: "17vw", height: "4vh" }}
              ></input>
            </div>
            <br></br>
            {/* <div className='at6'><button style={{width:'8vw',height:"5vh",cursor:'pointer',backgroundColor:"violet"}} onClick={()=>{navigate("/dashboard4")}}>Assign</button></div> */}
          </center>
        </div>
      </div>
    </>
  );
};

export default Addtask;

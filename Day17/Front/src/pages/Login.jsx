import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Router, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { login1 } from "../components/Redux/Userslice";
import Authservice from "../services/Authservice";

const Login = () => {
  const dispatch=useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const[login,setLogin]=useState({
    email:"",
    password:"",
  });
  const checkPass = (pass) => {
    var isValid = true;
    if (pass.length < 6) isValid = false;

    return isValid;
  };
  const Login = () => {
    console.log(email, " ", password);
    if (checkPass(password)) {
      dispatch(login1({
        email:email

      }))
      console.log("Password Valid TRUE");
      navigate("/Dashboard");
    } else {
      alert("Password length must be more then 6  ")
    }
  };
  const handlesubmit =async(e)=>{
    e.preventDefault();
    const error=Login();
    if(!error?.email&&!error?.password){
      await Authservice.Login(login)
      .then((response) => {
        console.log(response);
        if (response.data.role === "ADMIN") {
          dispatch(
            login1({
              email: response.data?.email,
              name: response.data?.name,
            })
          );
          navigate('/home')
        }
      })
      .catch((error) => {});
    }
  }
  return (
    <>
      <div className="App">
        <div className="app1">
          <form onSubmit={Login}>
            <div className="app2" style={{ fontFamily: "initial" }}>
              <b>LOGIN</b>
            </div>
            <div className="app3">
              <input
                type="email"
                placeholder="EMAIL"
                onChange={(e) => setEmail(e.target.value)}
                style={{
                  width: "300px",
                  height: "30px",
                  borderRadius: "20px",
                  textIndent: "20px",
                }}
                required={true}
              ></input>
            </div>
            <br></br>
            <div className="app4">
              <input
                type="password"
                placeholder="PASSWORD"
                onChange={(e) => setPassword(e.target.value)}
                style={{
                  width: "300px",
                  height: "30px",
                  borderRadius: "20px",
                  textIndent: "20px",
                }}
                required={true}
                ></input>{" "}<br></br>
                <div className="admin"> If you are a Admin<button  style={{ backgroundColor: "Skyblue", borderRadius: "10px" }}onClick={()=>{navigate('/Adminlog')}}>Admin</button></div> 
            </div>
            {/* <div className="app5" style={{fontSize:"12px"}}>forget password?  </div> */}
            <div className="login">
              {" "}
              <input
                type="submit"
                value={"Login"}
                onClick={handlesubmit}
                style={{
                  width: "90px",
                  height: "30px",
                  borderRadius: "20px ",
                  backgroundColor: "Skyblue",
                  color: "black",
                }}
              ></input>
            </div>
          </form>
            <div className="app6">
              Create an new Account?
              <Link to="/register">
                <button
                  style={{ backgroundColor: "skyblue", borderRadius: "10px" }}
                >
                  Signup
                </button>
              </Link>
            </div>
        </div>
      </div>
    </>
  );
};

export default Login;

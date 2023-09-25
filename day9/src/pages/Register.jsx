import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [pass, setPass] = useState('')
  const checkPass = (pass) => {

    var isValid = true;
    if (pass.length < 6) isValid = false;

    return isValid;}
  const Signup = (e) => {
    e.preventDefault();
    if (checkPass(pass)) {
      console.log("Password Valid TRUE");
      navigate("/Dashboard")
    } else {
      alert("Password length must be more then 6")
    }

  };
  return (
    <>
      <div className="reg">
        <form onSubmit={Signup} className="reg1" style={{ borderRadius: "100px" }}>
          <div
            className="reg2"
            style={{ fontFamily: "initial", fontSize: "40px" }}
          >
            <b>Registration!</b>
          </div>
          <div className="reg3">
            <input
              required={true}
              type="email"
              placeholder="Email"
              style={{
                width: "300px",
                height: "38px",
                borderRadius: "10px",
                textIndent: "20px",
              }}
              ></input>
          </div>
          <br></br>
          <div className="reg3">
            <input
              required={true}
              type="password"
              placeholder="Password"
              style={{
                width: "300px",
                height: "38px",
                borderRadius: "10px",
                textIndent: "20px",
              }}
              onChange={(e)=>setPass(e.target.value)}
            ></input>
          </div>
          <br></br>
          <div className="reg4">
            <input
              type="FirstName"
              placeholder="FirstName"
              style={{
                width: "300px",
                height: "38px",
                borderRadius: "10px",
                textIndent: "20px",
              }}
            ></input>
          </div>
          <br></br>
          <div className="reg5">
            <input
              type="LastName"
              placeholder="LastName"
              style={{
                width: "300px",
                height: "38px",
                borderRadius: "10px",
                textIndent: "20px",
              }}
            ></input>
          </div>
          <br></br>
          <div className="reg6">
            <input
              type="PhoneNumber"
              placeholder="Mobile No"
              style={{
                width: "300px",
                height: "38px",
                borderRadius: "10px",
                textIndent: "20px",
              }}
            ></input>
          </div>
          <br></br>
          <div className="reg7">
            <input
              type="Address"
              placeholder="Address"
              style={{
                width: "300px",
                height: "38px",
                borderRadius: "10px",
                textIndent: "20px",
              }}
            ></input>
          </div>
          <div className="reg9">
            If Already have an account?
              <button onClick={()=>navigate("/")} style={{ borderRadius: "10px" }}>Login</button>{" "}
          </div>
          <div className="reg8">
            <input
              type="submit"
              value={"Signup"}
              // onClick={Signup}
              style={{
                borderRadius: "10px",
                width: "90px",
                height: "35px",
                backgroundColor: "skyBlue  ",
                color: "black",
              }}
            ></input>
          </div>
        </form>
      </div>
    </>
  );
};

export default Register;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Authservice from "../services/Authservice";
import './Register.css'

const Register = () => {
 
 
  const navigate = useNavigate();
  const [Register, setRegister] = useState({
    first_name: "",
    last_name: "",
    mobile:"",
    email: "",
    password: "",
    address:"",
  });
  const [Signuperror, setSignuperror] = useState("");
  const Validate = () => {
    // setSignuperror({});
    let error = {};
    // if (Register.name.trim() === "") {
    //   error.name = true;
    //   // toast.error("Enter a Name");
    // }
    // if (Register.email.trim() === "") {
    //   error.email = true;
    //   // toast.error("Enter Email");
    // }
    // if (Register.password.trim() === "") {
    //   error.password = true;
    //   // toast.error("Enter Password");
    // } else if (Register.password.length < 6 || Register.password.lenght > 15) {
    //   // toast.error("password length is must be 6");
    //   error.password = true;
    // }
    // setSignuperror(error);
    // console.log(error);
    return error;
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setRegister({ ...Register, [name]: value });
  };
  const handleSumbit = async (e) => {
    e.preventDefault();
    const error = Validate();
    if (!error.name && !error.email && !error.password) {
      // toast.success("Signup Done");
      // setTimeout(() => {
      //   navigate("/home");
      // }, 1000);
      console.log(Register);
      await Authservice.Signup(Register)
        .then((response) => {
          console.log(response);
          if (response.status === 200) navigate("/");
        })
        .catch((error) => { });
    }
  };
  return (
    <div className='signup'>
  
    <div className='signupContainer'>
      <h1>WELCOME TO DELTA ENTERPRISE</h1>
      <h2>hi,Delta is at your Service</h2>
      <div className='signupcontent'>
        <input type="name" id='first_name' className='signup-input' placeholder='Enter Name' onChange={handleChange} name='first_name'
          required={true} >
        </input>
      
        <input type="text" id='email' className='signup-input' placeholder='Enter email' onChange={handleChange} name='email'
          required={true} >
        </input>
        <input type="text" id="password" className='signup-input' placeholder='Enter Password' onChange={handleChange} name='password'
          required={true} >
        </input>
        <input type="text" id="last_name" className='signup-input' placeholder='Enter last_name' onChange={handleChange} name='last_name'
          required={true} >
        </input>
        <input type="text" id="mobile" className='signup-input' placeholder='Enter mobile' onChange={handleChange} name='mobile'
          required={true} >
        </input>
        <input type="text" id="address" className='signup-input' placeholder='Enter address' onChange={handleChange} name='address'
          required={true} >
        </input>
        <button type="submit" onClick={handleSumbit}>Submit</button>

      </div>

      <div>
        Already have an account ?
        <span>Login</span>
      </div>
    </div>
  </div>

  );
};

export default Register;

import React, { useState } from "react";
import { useNavigate ,Link } from 'react-router-dom';
import { Alert } from '@mui/material';



const Signup = () => {
  const [error, setError] = useState({
    status: false,
    msg: "",
    type: ""
  })
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [cnic, setCnic] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");

  const navigate = useNavigate();

  const SubmitSignup = (e) => {

    e.preventDefault();
    let newEntry = { name, lastname, cnic, password, cpassword };

    if (name && lastname && cnic && password && cpassword !== null) {
      if (password === cpassword) {

        document.getElementById('registration-form')
        setError({ status: true, msg: "Registration Successful", type: 'success' })
        navigate('/Login')
      } else {

        setError({ status: true, msg: "Password and Confirm Password Doesn't Match", type: 'error' })
      }
    } else {

      setError({ status: true, msg: "All Fields are Required", type: 'error' })
    }
    
    fetch("http://localhost:5000/api/users/signup", {
      method: 'POST',
      headers: {
        'Accept': '*/*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newEntry)
    }).then((resp) => {
      resp.json().then((resp) => {
        console.warn("resp", resp)

      })
    })
  }


  return (
    <div>

      <form className='SignUp' onSubmit={SubmitSignup} id="Registration Successful">
        <h1 className='text'>Sign Up</h1>
        <div>
          <input className='SignUpfield' type="text" placeholder='Enter First Name'
            value={name}
            onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <input className='SignUpfield' placeholder='Enter Last Name'
            value={lastname}
            onChange={(e) => setLastname(e.target.value)} />
        </div>
        <div>
          <input className='SignUpfield' pattern="^\d{5}-\d{7}-[2,4,6,8]{1}$" placeholder='Enter CNIC'
            value={cnic}
            onChange={(e) => setCnic(e.target.value)} />
        </div>
        <div>
          <input className='SignUpfield' type="password" placeholder='Enter Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div>
          <input className='SignUpfield' type="password" placeholder='Enter Confirmed Password'
            value={cpassword}
            onChange={(e) => setCpassword(e.target.value)} />
        </div>
        <br></br>
        <button className="SignUpbutton" type="submit" onSubmit={SubmitSignup} >Sign Up</button><br></br>
        <label className="Ulabel">Already a user?</label>
        <Link className='Lin' to='/Login'>LOGIN</Link>
        {error.status ? <Alert severity={error.type}>{error.msg}</Alert> : ''}

      </form>

    </div>
  )
}
export default Signup;
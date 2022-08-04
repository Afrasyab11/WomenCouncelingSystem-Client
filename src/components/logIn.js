import React, {  useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { Alert } from '@mui/material';

const Login = () => {
  const [error, setError] = useState({
    status: false,
    msg: "",
    type: ""
  })

  const [cnic, setCnic] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();


  const Submitlogin = (e) => {
    e.preventDefault();
    localStorage.setItem('Login', true)
   

    const newEntry = { cnic, password };
    if (cnic && password  !== null) {
     
      document.getElementById('registration-form')
      setError({ status: true, msg: "Registration Successful", type: 'success' })
      navigate('/Home')
    } else {

      setError({ status: true, msg: "All Fields are Required", type: 'error' })
    }

console.log(newEntry)
    fetch("http://localhost:5000//signin", {
      method: 'POST',
      headers: {
        'Accept': '*/*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newEntry)
    }).then((result) => {
      result.json().then((resp) => {
        console.warn("resp", resp)

      })
    })

  }
  
  return (
    <div>

      <form className="LogIn" action="" onSubmit={Submitlogin} id="Registration Successful">
        <h1 className="text">LogIn</h1>
        <div >
          <input className="input" name="cnic" pattern="^\d{5}-\d{7}-[2,4,6,8]{1}$" id="cnic" autoComplete="False" placeholder="CNIC"
            value={cnic}
            onChange={(e) => setCnic(e.target.value)} 
              >
          </input>
        </div>


        <div >
          <input className="input" type="password" name="password" id="password" placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
             />
        </div><br></br>
        <label >Creater</label><input type="checkbox" ></input>
        <label >User</label>
        <input type="checkbox"></input><br></br>
        <button className="button" type="submit" >Login</button><br></br>
        {error.status ? <Alert severity={error.type}>{error.msg}</Alert> : ''}
        <label className="Ulabel">Already a user?</label>
        <Link className='Lin' to='/'>SIGNUP</Link>
      </form>

    </div>
  )
}
export default Login;
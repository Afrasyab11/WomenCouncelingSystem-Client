import React, { useState } from "react";

const Signup =(props)=>
{

    const [name, setName] = useState("");
    const [lastname, setLastname] = useState("");
        const [cnic, setCnic] = useState("");
        const [password, setPassword] = useState("");
        const [cpassword, setCpassword] = useState("");
        const [allEntry, setAllEntry] = useState([]);
    
        const SubmitSignup = (e) => {
            e.preventDefault();
            const newEntry = { name:name, lastname:lastname, cnic: cnic, password: password,Cpassword:cpassword };
            console.log(newEntry);
            setAllEntry([...allEntry, newEntry]);
            console.log(allEntry);
           
            if (name.trim() === '') {
                return;
    
            }
            if (lastname.trim() === '') {
                return;
    
            }
            if (cnic.trim() === '') {
                return;
    
            }
            if (password.trim() === '') {
                return;
    
            }
            if (cpassword.trim() === '') {
                return;
    
            }
    
        }
    
    return(
        <div>
           
           <form className='SignUp' onSubmit={SubmitSignup}>
               <h1 className='text'>Sign Up</h1>
               <div>
               <input className='SignUpfield' type="text" placeholder='Enter First Name'
                value={allEntry.name}
                onChange={(e) => setName(e.target.value)} />
               </div>
               <div>
               <input className='SignUpfield' placeholder='Enter Last Name'
                value={allEntry.lastname}
                onChange={(e) => setLastname(e.target.value)} /> 
               </div>
               <div>
               <input className='SignUpfield' type="text" pattern="^\d{5}-\d{7}-[1,3,5,7,9]{1}$" placeholder='Enter CNIC'
                                       value={allEntry.cnic}
                                       onChange={(e) => setCnic(e.target.value)} /> 
               </div>
               <div>
               <input className='SignUpfield' type ="password" placeholder='Enter Password'
                value={allEntry.password}
                onChange={(e) => setPassword(e.target.value)} /> 
               </div>
               <div>
               <input className='SignUpfield' type="password" placeholder='Enter Confirmed Password'
                value={allEntry.cpassword}
                onChange={(e) => setCpassword(e.target.value)} /> 
               </div>
               <br></br>
                <button className="SignUpbutton" type="submit" onSubmit={SubmitSignup} >Sign Up</button>
               </form> 
               
        </div>
    )
}
export default Signup;
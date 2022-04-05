import React, { useState } from "react";


const Login = (props) => {
   
    const [cnic, setCnic] = useState("");
    const [password, setPassword] = useState("");
   
    const [allEntry, setAllEntry] = useState([]);

 


    const Submitlogin = (e) => {
        e.preventDefault();
        const newEntry = { cnic: cnic, password: password };
        console.log(newEntry);
        setAllEntry([...allEntry, newEntry]);
        
        console.log(allEntry)
       
     
  


   
  
 
  
        if (cnic.trim()==='') {
           return ;
           
         
           }  
        
        if (password.trim() === '') {
            return;

        }

    }



    return (
        <div>

            <form className="LogIn" action="" onSubmit={Submitlogin} >
                <h1 className="text">LogIn</h1>
                <div >
                    <input className="input" name="cnic" pattern="^\d{5}-\d{7}-[1,3,5,7,9]{1}$"  id="cnic" autoComplete="False"  placeholder="CNIC"
                        value={allEntry.cnic}
                        onChange={(e) => setCnic(e.target.value)}>
                           

                    </input>
                    
                </div>
                

                <div >
                    <input className="input" type="password" name="password" id="password" placeholder="Password" 
                    value={allEntry.password}
                        onChange={(e) => setPassword(e.target.value)}/>
                </div><br></br>
                <button className="button" type="submit"  >Login</button>
            </form>

        </div>
    )
}
export default Login;
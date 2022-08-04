import {useState} from 'react';
import "./chat.css"


 const Chat =()=> {
    const [question, setquestion]=useState("");
  return (
    <div>
        <form className='question'>
        <p  value={question} onChange={(e)=>setquestion(e.target.value)} >This is question</p>
        </form>
        </div>
  )
}
export default Chat;
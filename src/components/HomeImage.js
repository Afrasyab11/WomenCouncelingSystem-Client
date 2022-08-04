import { useState } from "react";
import './Home.css';


const HomeImage = () => {

  const [question, setquestion] = useState("");

  const postquestion = (e) => {
    e.preventDefault();
    const data = { question };

    fetch("localhost:3000/api/postquestion", {
      method: 'POST',
      headers: {
        'Accept': '*/*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then((result) => {
      result.json().then((resp) => {
        console.warn("resp", resp)

      })
    })

  }
  return (
    <div>

      <img className='image' src={ "/images/image1.jpeg"} width='100%' height='660' alt='flower'></img>
      <div>
        <form>
          <input type="text" value={question} onChange={(e) => setquestion(e.target.value)} className="askQuestion" placeholder="Ask Question" />
          <button type="submit" onSubmit={postquestion} className="askquestion-btn"> Ask Question</button>
        </form>
      </div>

    </div>

  )
}
export default HomeImage;
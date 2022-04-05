import React from "react";

import './Home.css';


const HomeImage = () => {
  return (
    <div>

      <img className='image' src={process.env.PUBLIC_URL + "/images/image1.jpeg"}  width='100%' height='660' alt='flower'></img>
     <div>
       <input type="text" className="askQuestion" placeholder="Ask Question" />
       <button type="button" className="askquestion-btn"> Ask Question</button>
     </div>
      
    </div>

  )
}
export default HomeImage;
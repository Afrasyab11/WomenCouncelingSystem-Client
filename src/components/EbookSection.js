import React from 'react';
import './Home.css';


const EbookSection = () => {
  return (
    <div>

      <div className="Books">
        <div  >
          <button className="btn" type="button">Play Book</button>
        </div>
        <div className='image2' >
          <img src={process.env.PUBLIC_URL + "/images/image10.jpeg"} width="350" height='250' alt='flower'></img>
          <div> <button className="btn2" type="button">Read</button></div>
        </div>


        <div className='image3'>
          <img src={process.env.PUBLIC_URL + "/images/image10.jpeg"} width="350" height='250' alt='flower'></img>
          <div> <button className="btn3" type="button">Read</button></div>
        </div>


        <div className='image4' >
          <img src={process.env.PUBLIC_URL + "/images/image3.jpeg"} width="350" height='250' alt='flower'></img>
          <div> <button className="btn4" type="button">Read</button></div>
        </div>


        <div className='image5'>
          <img src={process.env.PUBLIC_URL + "/images/image2.jpeg"} width="350" height='250' alt='flower'></img>
          <div> <button className="btn5" type="button">Read</button></div>
        </div>



        <div className='image6' >
          <img src={process.env.PUBLIC_URL + "/images/image11.jpeg"} width="350" height='250' alt='flower'></img>
          <div> <button className="btn6" type="button">Read</button></div>
        </div>



        <div className='image7'>
          <img src={process.env.PUBLIC_URL + "/images/image3.jpeg"} width="350" height='250' alt='flower'></img>
          <div> <button className="btn7" type="button">Read</button></div>
        </div>


        <div>
          <button className="View-All" type="button">View All </button>
        </div>

      </div>
    </div>
  );
}


export default EbookSection;



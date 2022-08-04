import { useState, useEffect } from 'react';
import './Home.css';

const BlogSection = () => {

  const [data, setdata] = useState([])

  useEffect(() => {

    fetch("http://localhost:5000/api/blogs")
      .then(response => {
        return response.json();
      })
      .then(data => {
        console.log("Data has been stored",data);
        setdata(data.blogs)
        
       
      });

  }, []);
  console.log(data)
  return (
    <div>
    {data.map((item) =>
    <div className='Blogs-read'>
    
        <div className='Blogs-title' >
          <h3>{item.title}</h3>
          <p  className='paragraph'> {item.description} </p>
        </div>
        </div>
      )}
    
     
        
    </div>


  );
}

export default BlogSection;

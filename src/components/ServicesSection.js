import React from 'react';
import './Home.css';
import { useState, useEffect } from "react";

const ServicesSection = () => {


  const [posts, setposts] = useState([])

  useEffect(() => {

    fetch("http://localhost:5000/api/videos")
      .then(response => {
        return response.json();
      })
      .then(posts => {
        console.log("data has been stored", posts);
        setposts(posts.video)


      });

  }, []);
  console.log(posts)
  return (
    <div>

      {posts.map((post, i) =>
   
        <div key={i}  className="Videos">
          <video   className="video1" width="750" height="500" controls >
         
          <source src={post.videos} width={350} height={200} controls="controls" autoPlay={true} />
          </video>
          <h4 className="video-title" >{post.name}</h4>
        </div>
        )
      }
        </div>
  )
}
export default ServicesSection;

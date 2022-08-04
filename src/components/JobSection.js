import { useState, useEffect } from "react";
import "./Home.css";

const JobSection = () => {

  const [posts, setposts] = useState([])

  useEffect(() => {

    fetch("http://localhost:5000/api/jobs")
      .then(response => {
        return response.json();
      })
      .then(posts => {
        console.log("posts has been stored", posts);
        setposts(posts.jobs)


      });

  }, []);
  console.log(posts)
  return (

    <div>

{posts.map((post) =>
      <div className="JobViewTable">
        <div className="JobView">
        <h4 >{post.title}</h4>
          <p  className='Paragraph'> {post.description} </p>
        </div>

      </div>
)}

    </div>


  )
}
export default JobSection;
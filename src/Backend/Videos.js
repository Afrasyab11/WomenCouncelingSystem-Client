import React, { useState } from "react";
import "./video.css"


const Videos = () => {

  const [name, setname] = useState("");
  const [videos, setvideos] = useState([]);

  const upload = (e) => {
    e.preventDefault();
    
    let formdata = new FormData();

    formdata.append("videos", videos[0]);

    formdata.append("name", name)

    fetch("http://localhost:5000/api/videos", {
      method: 'POST',
      body: formdata
     


    }).then((resp) => {
      resp.json().then((result) => {
        console.warn("result", result)
       

      })
    })
  }

  return (
    <div>

      <form className="Vdo" action="" onSubmit={upload} >
        <h1 className="Vhder">Upload Videos</h1>
        <div >
          <label className="Vlabel" htmlFor="videos">Title</label>
          <input className="Vtitle" name="title" id="title" autoComplete="False" placeholder="Title"
            value={name}
            onChange={(e) => setname(e.target.value)}>
          </input>
        </div><br></br>
        <div >
          <label className="vlbl" htmlFor="videos">Upload Video</label>
          <input className="Vupload" type="file" name="videos" id="videos" multiple
            onChange={(e) => {setvideos(e.target.files)}}
          />
        </div><br></br>
        <button className="Vdoupld" type="submit" onSubmit={upload}  >Upload</button>
      </form>

    </div>
  )
}
export default Videos;
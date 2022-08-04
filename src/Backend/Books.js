import React, { useState } from "react";
import "./books.css"


const Books= () => {

  const [name, setname] = useState("");
  const [file, setfile] = useState([]);

  const upload = (e) => {
    e.preventDefault();
    let formdata = new FormData();

    formdata.append("books", file[0]);

    formdata.append("name", name)

    fetch("http://localhost:5000/api/books", {
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

      <form className="bok" action="" onSubmit={upload} >
        <h1 className="bhdr">Upload Books</h1>
        <div >
          <label className="Blabel" htmlFor="file">Title</label>
          <input className="Btitle" name="name" id="title" autoComplete="False" placeholder="Title"
            value={name}
            onChange={(e) => setname(e.target.value)}>
          </input>
        </div><br></br>
        <div >
          <label className="blbl" htmlFor="file">Upload File</label>
          <input className="Bupload" type="file" name="books" id="file" multiple
            onChange={(e) => {setfile(e.target.files)}}
          />
        </div><br></br>
        <button className="Bkoupld" type="submit" onSubmit={upload}  >Upload</button>
      </form>

    </div>
  )
}
export default Books;
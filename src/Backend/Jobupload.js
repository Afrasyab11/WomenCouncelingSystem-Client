import React, { useState } from "react";
import "./blogs.css"


const Jobupload = () => {

    const [title, setTitle] = useState("");
    const [description, setdescription] = useState("");



    const upload = (e) => {
        e.preventDefault();

        const newEntry = { title, description };


        fetch("http://localhost:5000/api/jobs", {
            method: 'POST',
            headers: {
                'Accept': '*/*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newEntry)
        }).then((result) => {
            result.json().then((resp) => {
                console.warn("resp", resp)

            })
        })

    }



    return (
        <div>

            <form className="blogs" action="" onSubmit={upload} >
                <h1 className="Blogs">job Upload</h1>
                <div >
                    <input className="title" name="title" id="title" autoComplete="False" placeholder="Enter job Title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}>


                    </input>

                </div>


                <div >
                    <textarea className="description" placeholder="Description" value={description}
                        onChange={(e) => setdescription(e.target.value)}>

                    </textarea>
                </div><br></br>
                <button className="upload" type="submit"  >Upload</button>
            </form>

        </div>
    )
}
export default Jobupload;
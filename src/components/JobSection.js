import React from "react";
import "./Home.css";
import { AiFillApple } from "react-icons/ai";
const JobSection = () => {
    return (

        <div>
            <div className="SearchJob" >
                <div>
                    <label className="jobselect-title" >Type of work:</label><br></br><br></br>
                    <select className="jobselect" >
                        <option value="All Types">All Types</option>
                        <option value="software Developer">software Developer</option>
                        <option value="Marketing Manager">Marketing Manager</option>
                        <option value="HR">HR</option>
                        <option value="Business Developer">Business Developer</option>
                    </select>

                    <div>

                        <label className="IndusriesSelect-title">Indusries:</label><br></br><br></br>
                        <select className="IndusriesSelect">
                            <option value="All Industries">All Indusries</option>
                            <option value="IT">IT</option>
                            <option value="Banking">Banking</option>
                            <option value="OGDCL"> OGDCL</option>
                            <option value="Business">Business Developer</option>
                        </select>
                    </div>
                </div>

                <div className="JobViewTable">
                    <div className="JobView">
                        <h5><AiFillApple className="logo" /> MERN stack Developer</h5>
                        <h3>Fron End Developer</h3>
                        <p>Clevertech is a leading consultancy that operates fully remote. We build<br>
                        </br> transformational digital solutions for the world’s most innovative<br></br> organizations.</p>
                    </div>

                </div>
            </div>

        </div>
    )
}
export default JobSection;
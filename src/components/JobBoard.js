import React from "react";
import HomeImage from "./HomeImage";
import "./Home.css"
import JobSection from "./JobSection";
// import Footer from "./Footer";


const JobBoard = () => {

    return (
        <div>
            <div>
                <HomeImage />
                <JobSection />
               {/* / <Footer/> */}
               
            </div>
        </div>
    )
}

export default JobBoard;
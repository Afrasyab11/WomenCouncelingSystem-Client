import React from "react";
import './Home.css';

// import BlogSection from "./BlogSection";
import EbookSection from "./EbookSection";
import ServicesSection from "./ServicesSection";


import HomeImage from "./HomeImage";
// import Footer from "./Footer";





const Home =()=>
{
    return(
        <div>
           <HomeImage/>
      <ServicesSection/>
        <EbookSection/>
        {/* <BlogSection/> */}
        {/* <Footer/> */}
        

        </div>
        
        
    )
}
export default Home;
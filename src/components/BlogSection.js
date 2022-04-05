import React from 'react';
import './Home.css';

const BlogSection = () =>{
  
   
  return (
    <div>
 
     <div className='blogs'>

     <div className='blogs-join' >

        <div className='blogs-email'>
             <input className='blogs-email1'  type="text" placeholder='Email' name="Email" /> 
        </div>

                   <div className='blogs-password'>
                      <input className='blogs-password1' type= "password" placeholder='Password'></input>
                   </div>

                            <div className='blogs-btn'>
                                <button className='blogs-btn1' type='button' > Join </button>
                             </div>
   </div>
   



            <div className='Blogs-read'>
              <div>
               <input className='Blogs-title' type="text" /> 
               </div>
          <div>
               <button className='Blogs-search' type='text' >Search</button>
               </div>
             <div className='paragraph' >
               <p>It is a long established fact that a reader will be<br></br> distracted by the readable content of
                  a page when<br></br>  looking at its layout. The point of using Lorem Ipsum is<br></br>  that it has a more-or-less
                   normal distribution of letters,<br></br>as opposed to using 'Content here, content here', making<br></br>  it look
                    like readable English. Many desktop publishing<br></br>  packages and web page editors now use 
                   Lorem Ipsum as<br></br>  their default model text, and a search for 'lorem ipsum'<br></br>  will uncover many web sites 
                   still in their infancy.<br></br>  Various versions have evolved over the years, sometimes<br></br>  by accident, sometimes
                    on purpose (injected humour and<br></br>  the like).</p>
                    <div >
                                <button className='blogs-continue' type='button' > Continue </button>
                             </div>
                             <div className='blogs-Author-name' >
                                Author Name 
                             </div>
                             
                             <div className='blogs-date'>
                                Date: <input type="date" name="trip-start"
                                 value="2022-03-5" min="2018-01-01" max="2030-12-31"/>
                             </div>
                    </div>
                   
             </div>
  </div>
  
</div>
      
    
  );
}

export default BlogSection;

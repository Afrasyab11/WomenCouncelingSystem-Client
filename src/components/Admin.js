import React from 'react';
import HomeImage from './HomeImage';

import Footer from './Footer';

import Videos from '../Backend/Videos';
import Jobupload from '../Backend/Jobupload';
import Blogsupload from '../Backend/Blogsupload';
import Books from '../Backend/Books';


function Admin() {

  
  



  return (
    <div>
      <HomeImage />
   
    <Videos/>
    <Books/>
      <Blogsupload/>
      <Jobupload/>
      
      <Footer />
    </div>
  )
}

export default Admin;

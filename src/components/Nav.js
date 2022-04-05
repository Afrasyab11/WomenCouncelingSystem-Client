import React from 'react';

import './nav.css';

const Nav= () =>{
  return (
  <div>
    
      <ul className='nav'>
        <li>
        <img className='logo' src={process.env.PUBLIC_URL + "/logo/download.jpg"} width="1000" height='1000' alt='' ></img>
        </li>
      <li>
      <a href="/">Home</a>
    </li>
    <li>
      <a href="/Services">Services</a>
    </li>
    <li>
      <a href="/eBooks">Ebooks</a>
    </li>
    <li>
      <a href="/Blogs">Blogs</a>
    </li>
    <li>
      <a href="/JobBoard">JobBoard</a>
    </li>
    
    <li>
      <a  href="/logIn" >Login</a>
    </li>
    <li>
      <a  href="/Signup" >Sign Up</a>
    </li>
    <li>
      <input className='searchbar' type='text' placeholder='Search'></input>
    </li>
    
    </ul>
    
    
  </div>
  );
}
export default Nav;
import React from 'react';
import { Link } from 'react-router-dom';
import './nav.css';



const Nav = () => {
  return (
    <div className='nav'>

      <Link className='link' to='/'>Signup</Link>
      <Link className='link' to='/Services'>Videos</Link>
      <Link className='link' to='/eBooks'>eBooks</Link>
      <Link className='link' to='/Blogs'>Blogs</Link>
      <Link className='link' to='/JobBoard'>JobBoard</Link>
      <Link className='link' to='/Login'>Login</Link>
      <Link className='link' to='/Home'>Home</Link>
      <Link className='link' to='/Admin'>Admin</Link>
      
      
      
      <input className='searchbar' type='text' placeholder='Search'></input>


      <img className='logo' src={process.env.PUBLIC_URL + "/logo/download.jpg"} width="1000" height='1000' alt='' ></img>








    </div>
  );
}
export default Nav;
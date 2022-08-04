import './App.css';
import { Routes, Route } from "react-router-dom";
import Services from './components/Services';
import Blogs from './components/Blogs';
import Nav from './components/Nav';
import Home from './components/Home';
import Ebooks from './components/Ebooks';
import JobBoard from './components/JobBoard';
import Login from './components/logIn';
import Signup from './components/Signup';
import Admin from './components/Admin';
import Chat from './components/chat';





function App() {

  return (



    <>

      <Nav />
      <Routes>
        <Route path='/' element={< Signup />} />
        <Route path='/Home' element={<Home />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/Services' element={< Services />} />
        <Route path='/Ebooks' element={<Ebooks />} />
        <Route path='/Blogs' element={<Blogs />} />
        <Route path='/JobBoard' element={< JobBoard />} />
        <Route path='/chat' element={< Chat />} />
        <Route path='/Admin' element={< Admin />} />
        

      </Routes>
    </>





  );
}

export default App;
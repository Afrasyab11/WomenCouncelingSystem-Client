import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Services from './components/Services';
import Blogs from './components/Blogs';
import Nav from './components/Nav';
import Home from './components/Home';
import Ebooks from './components/Ebooks';
import JobBoard from './components/JobBoard';
import logIn from './components/logIn';
import Signup from './components/Signup';

function App() {
  return (
    
    
      
    <Router>
    <Nav/>
      
      <Switch>
      <Route path='/' exact component={Home} />
        <Route path='/Services' component={Services} />
        <Route path='/Ebooks' component={Ebooks} />
        <Route path='/Blogs' component={Blogs} />
        <Route path='/JobBoard' component={JobBoard} />
        <Route path='/logIn' component={logIn} />
        <Route path='/Signup' component={Signup} />
      
   
      </Switch>
    </Router>
    
    
    
    
  );
}

export default App;
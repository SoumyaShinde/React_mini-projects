import logo from './logo.svg';
import './App.css';
import Homepage from './Homepage';
import Aboutme from './Aboutme';
import {Routes, Route, Link} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <nav className='nav'> 
         <Link to='/' className='nav-items'>Homepage</Link>
         <Link to='/about-me' className='nav-items'>About Me</Link>
      </nav>

      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/about-me' element={<Aboutme />}/>
      </Routes>
    
    </div>
  );
}

export default App;

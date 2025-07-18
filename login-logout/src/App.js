import './App.css';
import Login from './Login.js'
import Logout from './Logout.js'
import Home from './Home.js'
import {useState} from 'react'

function App() {
  const[loggedIn, setLoggedIn] = useState(false);
  const login = ()=>setLoggedIn(true);
  const logout = ()=>setLoggedIn(false);

  return (
    <>
    {loggedIn?
      <div>
        <Home/>
        <Logout logout={logout}/>
      </div>:
      <div>
        <Login login={login}/>
      </div>}
    </>
  );
}

export default App;

import Btn from './Btn';
import Btn2 from './Btn2';
import ModeToggler from './ModeToggler';
import './App.css';

import { useState } from 'react';
function App() { 
  return (
    <div>
    <ModeToggler/>
    <Btn/>
    <Btn2/>
    </div>
  );
}

export default App;

import { useState } from 'react'
import './App.css'
import Dayone from "./Files/Dayone";
import Files from "./Files/files";
import Daytwo from "./Files/Daytwo";
import Daythree from './Files/Daythree';

function App() {

  
  return (
  <div>
    <Dayone></Dayone>
    <Files/>
    <Daytwo></Daytwo>
    <Daythree/>
  </div>
  );
}

export default App;

import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import './App.css'
import Dayone from "./Files/Dayone";
import Files from "./Files/files";
import Daytwo from "./Files/Daytwo";
import Daythree from './Files/Daythree';
import Get from './Files/Get';
import Post from './Files/Post'


function App() {

  
  return (
  <div>
    {/* <Dayone></Dayone>
    <Files/>
    <Daytwo></Daytwo>
    <Daythree/> */}
    {/* <Dayfour/> */}
    {/* <Dayfive/> */}

    <Routes>
      <Route path='/' element={<Dayone/>}></Route>
      <Route path='/Daytwo' element={<Daytwo/>}></Route>
      <Route path='/Daythree' element={<Daythree/>}></Route>
      <Route path='/Get' element={<Get/>}></Route>

      <Route path='/Post' element={<Post/>}></Route>
    

    </Routes>
  </div>
  );
}

export default App;

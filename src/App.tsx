import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import BasicExample from './Components/NavBarComponent';
import HomeComponent from './Components/HomeComponent';
import JobFiveComponent from './Components/JobFiveComponent';
import JobOneComponent from './Components/JobOneComponent';
import JobTwoComponent from './Components/JobTwoComponent';
import JobThreeComponent from './Components/JobThreeComponent';
import JobFourComponent from './Components/JobFourComponent';




function App() {
  return (
    <BrowserRouter>
     <BasicExample />
     <Routes>
      <Route path='/'element={<HomeComponent/>}></Route>
      <Route path='/job1'element={<JobOneComponent/>}></Route>
      <Route path='/job2'element={<JobTwoComponent/>}></Route>
      <Route path='/job3'element={<JobThreeComponent/>}></Route>
      <Route path='/job4'element={<JobFourComponent/>}></Route>
      <Route path='/job5'element={<JobFiveComponent/>}></Route>
     </Routes>
    </BrowserRouter>
  );
}

export default App;

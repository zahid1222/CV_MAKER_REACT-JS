import React from 'react';
import Home from './Home';
import { Route,Routes } from 'react-router-dom';
import Personalinformation from './Personalinformation';
import Education from './Education';
import Skills from './Skills';
import WorkExperience from './WorkExperience';
import LeadershipActivities from './LeadershipActivities';
import Thanks from './Thanks';
import Signup from "./Signup";
import Signin from "./Signin";
function Pages() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Signup/>} />
        <Route path="/Signin" element={<Signin/>} />
        <Route path="/Education" element={<Education/>} />
        <Route path="/Skills" element={<Skills/>} />
        <Route path="/WorkExperience" element={<WorkExperience/>} />
        <Route path="/LeadershipActivities" element={<LeadershipActivities/>} />
        <Route path="/Thanks" element={<Thanks/>} />
      </Routes>
    </div>
  )
}

export default Pages

import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { Routes, Route} from 'react-router-dom';

import PersonalInformation from './Components/PersonalInformation';
import Confirmation from './Components/Confirmation';
import Comment from './Components/Comment';
import Review from './Components/Review';

function App() {
  
  return (
    <div className="App">
     <nav className="navbar navbar-light bg-dark">
  <span className="navbar-text">
    <h4 className="navtitle">Give Feedback or File a Complaint</h4>
  </span>
</nav>
  {/* <PersonalInformation/> */}
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<PersonalInformation/>}/>
    <Route path="/personalinformation" element={<PersonalInformation/>}/>
    <Route path="/confirmation" element={<Confirmation/>}/>
    <Route path="/comment" element={<Comment/>}/>
    <Route path="/review" element={<Review/>}/>
    </Routes>
  
  </BrowserRouter>

    </div>
  );
}

export default App;

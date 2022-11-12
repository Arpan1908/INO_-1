import Home from './Home'
import React from 'react';
import { BrowserRouter as Router, Routes, Route,  } from "react-router-dom";
import Login from './Login';
import SignUp from './SignUp';





function App() {
  return (
    <Router>
    <div className="App">
      <div className="auth-wrapper">
        <div className="auth-inner">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/sign-in" element={<Login />} />
            <Route path="/sign-up" element={<SignUp />} />
            
          </Routes>
        </div>
      </div>
    </div>
  </Router>

      
      

    
  )
}

export default App;

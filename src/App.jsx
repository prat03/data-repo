import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import axios from 'axios'
import './App.css'
import Form from './components/form.jsx'
import Login from './components/login.jsx'

function App() {
  

  return (
   <> 
     <h1>Form Details</h1>
      
      {/* <div>
        <Form/>
    </div> */}
    <Router>
      <div className="app-container">
        <nav>
          <ul>
            <li>
              <Link to="/signup">Sign Up</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/signup" element={<Form />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={
          <div>
            <h1>Welcome!</h1>
          </div>} /> {/* Default route */}
        </Routes>
      </div>
    </Router>
    </>
  );
}

export default App

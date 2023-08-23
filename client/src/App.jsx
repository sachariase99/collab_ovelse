import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import { Header_main, Button_jannick, Studentpage } from './components';

function App() {
  return (
    <div>
      <Router>
        <Header_main /> {/* Always show the header */}
        
        <div>
          <Routes>
            <Route path="/" element={<Button_jannick />} />
            <Route path="/student" element={<Studentpage />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login'; // Import your Login component
import Dashboard from './Dashboard'; // Import your Dashboard component or any other components

const App = () => {
  return (
    <Router>
      <div>
        <h1>My App</h1>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          {/* Add more routes for other components/pages */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;

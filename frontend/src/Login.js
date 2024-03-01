import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; // Import Axios for making HTTP requests

const Login = () => {
  // Define state variables for username and password
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  // Define navigate function from useNavigate hook
  const navigate = useNavigate();

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission
    try {
      // Make POST request to login API with username and password
      const response = await axios.post('http://127.0.0.1:8000/users/login/', {
  username: username,
  password: password
});
const authToken = response.data.token; // Get the token from the response
localStorage.setItem('authToken', authToken); // Save token to local storage
axios.defaults.headers.common['Authorization'] = `Bearer ${authToken}`; // Set Axios headers

      // Redirect user to dashboard after successful login
      
      navigate('/dashboard');
    } catch (error) {
      // Log any errors to the console
      console.error('Login error:', error);
      // Handle login errors here (e.g., display error message to user)
    }
  };

  // JSX for the login form
  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;

import React from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const Logout = () => {
  const history = useHistory();

  const handleLogout = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:4000/api/v1/user/logout'); // Ensure this matches the backend route
      if (response.status === 200) {
        localStorage.removeItem('authToken');
        history.push('/login');
      } else {
        console.error('Logout failed');
      }
    } catch (error) {
      console.error('Error logging out', error);
      alert('Logout failed. Please try again.');
    }
  };

  return (
    <button onClick={handleLogout}>
      Logout
    </button>
  );
};

export default Logout;

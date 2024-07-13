import React from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const Logout = () => {
  const history = useHistory();

  const handleLogout = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:4000/api/v1/user/logout');
      if (response.status === 200) {
        // Clear local storage or any other storage
        localStorage.removeItem('authToken');
        // Redirect to login page or homepage
        history.push('/login');
      } else {
        console.error('Logout failed');
      }
    } catch (error) {
      console.error('Error logging out', error);
    }
  };

  return (
    <button onClick={handleLogout}>
      Logout
    </button>
  );
};

export default Logout;

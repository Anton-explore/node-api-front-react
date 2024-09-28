import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
// import axios from 'axios';

const Header: React.FC = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    console.log('click')
    // await axios.post('/api/logout', {}, { withCredentials: true });
    navigate('/login');
  };

  return (
    <header>
      <nav>
        <Link to="/">Bootcamps</Link>
        <Link to="/courses">Courses</Link>
        <button onClick={handleLogout}>Logout</button>
      </nav>
    </header>
  );
}

export default Header;
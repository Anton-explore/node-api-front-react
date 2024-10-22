import React from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
// import axios from 'axios';

const Header: React.FC = () => {
  const { type } = useParams<{ type?: string }>();
  const navigate = useNavigate();

  const handleLogout = async () => {
    console.log('click')
    // await axios.post('/api/logout', {}, { withCredentials: true });
    navigate('/login');
  };

  return (
    <header>
      {type !== 'login' && type !== 'signup' &&
        (<nav>
          <Link to="/">Bootcamps</Link>
          <Link to="/courses">Courses</Link>
          <button onClick={handleLogout}>Logout</button>
        </nav>)
      }
    </header>
  );
}

export default Header;
import React from 'react';
import { useQuery } from 'react-query';
// import axios from 'axios';
import { Link } from 'react-router-dom';

interface Bootcamp {
  id: string;
  name: string;
}

const MainPage: React.FC = () => {
  const { data, isLoading, error } = useQuery<Bootcamp[]>('bootcamps', async () => {
    const response = {
      data: [
        { id: '1', name: 'Bootcamp 1' },
        { id: '2', name: 'Bootcamp 2' }
      ]
    };
    // const response = await axios.get('/api/bootcamps', { withCredentials: true });
    return response.data;
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading bootcamps</p>;

  return (
    <div>
      <h1>Bootcamps</h1>
      <ul>
        {data?.map((bootcamp) => (
          <li key={bootcamp.id}>
            <Link to={`/bootcamps/${bootcamp.id}`}>{bootcamp.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MainPage;
import React, { useState } from 'react';
// import { useQuery } from 'react-query';
// import axios from 'axios';
import { Link } from 'react-router-dom';
import { useGetBootcampsQuery } from '../api/bootcampApi';

// interface Bootcamp {
//   _id: string;
//   name: string;
//   description: string;
// }

export const url = 'https://node-api-courses.onrender.com/api/v1/bootcamps';

const MainPage: React.FC = () => {
  const [page] = useState(1);
  const [limit] = useState(25);
  const [sort] = useState<string | undefined>(undefined);

  const {
    data: bootcamps,
    isLoading: bootcampLoading,
    error: bootcampError
  } = useGetBootcampsQuery({ page, limit, sort});


  // async function fetchData() {
  //   const response = await axios.get('https://node-api-courses.onrender.com/api/v1/bootcamps', { withCredentials: true });
  //   console.log(response);
  //   return response.data.data;
  // }

  // type Bootcamps = Awaited<ReturnType<typeof fetchData>>;

  // const { data, isLoading, error } = useQuery<Bootcamp[]>('bootcamps', fetchData);

  if (bootcampLoading) return <p>Loading...</p>;
  if (bootcampError) return <p>Error loading bootcamps</p>;
  if (!bootcamps) return <p>No data</p>;

  return (
    <div>
      <h1>Bootcamps</h1>
      <ul>
        {bootcamps?.data?.map((bootcamp) => (
          <li key={bootcamp._id}>
            <Link to={`/bootcamps/${bootcamp._id}`}>
              <h3>{bootcamp.name}</h3>
            </Link>
            <p>{bootcamp.description}</p>
            {/* <button onClick={() => handleDelete(bootcamp._id)}>Delete</button> */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MainPage;
import React, { useState } from 'react';
// import { useQuery } from 'react-query';
// import axios from 'axios';
import { Link } from 'react-router-dom';
import { useGetBootcampsQuery } from '../api/bootcampApi';
import DataImage from '../components/common/Image/Image';
import Filter, { ISearchForm } from '../components/common/Filter/Filter';
import Pagination from '../components/common/Pagination/Pagination';

// interface Bootcamp {
//   _id: string;
//   name: string;
//   description: string;
// }

export const url = 'https://node-api-courses.onrender.com/api/v1/bootcamps';

const MainPage: React.FC = () => {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [sort] = useState<string | undefined>(undefined);

  const {
    data: bootcamps,
    isLoading: bootcampLoading,
    error: bootcampError
  } = useGetBootcampsQuery({ page, limit, sort });

  const totalPages = bootcamps ? Math.ceil(bootcamps.count / limit) : 1;
  
  const handleSubmit = (data: ISearchForm) => {
    console.log(data);
  }

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };

  const handleLimitChange = (newLimit: number) => {
    setLimit(newLimit);
    setPage(1);
  };

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
    // <div>
    //   <h1>Bootcamps</h1>
    <section className="browse my-5">
			<div className="container">
        <div className="row">
          <Filter onSubmit={handleSubmit} />
          <div className='col-md-8'>
            {bootcamps?.data?.map((bootcamp) => (
              <div className='card mb-3' key={bootcamp._id}>
                <div className="row no-gutters">
                  <div className="col-md-4">
                    <DataImage photo={bootcamp.photo} />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h3 className='card-title'>
                        <Link to={`/bootcamps/${bootcamp._id}`}>
                          {bootcamp.name}
                        </Link>
                        <span
                          className="float-right badge badge-success"
                        >
                          {bootcamp.averageRating}
                        </span>
                      </h3>
                      <p className='card-text'>{bootcamp.description}</p>
                      <Link
                        to={`/bootcamps/${bootcamp._id}`}
                        className='btn btn-primary'
                      >
                        Explore
                      </Link>
                    </div>
                  </div>
                </div>
                {/* <button onClick={() => handleDelete(bootcamp._id)}>Delete</button> */}
              </div>
            ))}

            <Pagination
              currentPage={page}
              totalPages={totalPages}
              limit={limit}
              onPageChange={handlePageChange}
              onLimitChange={handleLimitChange}
            />
          </div>
        </div>
      </div>
    </section>
      
    // </div>
  );
}

export default MainPage;
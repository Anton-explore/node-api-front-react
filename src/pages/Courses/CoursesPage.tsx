import React, { useState } from 'react';
import { useGetCoursesQuery } from '../../api/coursesApi';
import CourseView from '../../components/Course/CourseView';
// import { useQuery } from 'react-query';
// import axios from 'axios';



const CoursesPage: React.FC = () => {

  const [page] = useState(1);
  const [limit] = useState(25);
  const [sort] = useState<string | undefined>(undefined);

  const {
    data,
    isLoading,
    error
  } = useGetCoursesQuery({ page, limit, sort});

  // async function fetchData() {
  //   const response = await axios.get('https://node-api-courses.onrender.com/api/v1/courses', { withCredentials: true });
  //   console.log(response.data.data);
  //   return response.data.data;
  // }

  // const { data, isLoading, error } = useQuery<Course[]>('courses', fetchData);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading courses</p>;
  if (!data) return <p>No data</p>;

  return (
    <div>
      <h1>Courses</h1>
      <ul className='row g-3'>
        {data?.data.map((course) => (
          <li key={course._id}>
            <CourseView course={course} />
          </li>
          // <li key={course._id}>
          //   <Link to={`/courses/${course._id}`}>
          //     <h3>{course.title}</h3>
          //   </Link>
          //   <p>{course.description}</p>
          // </li>
        ))}
      </ul>
    </div>
  );
}

export default CoursesPage;
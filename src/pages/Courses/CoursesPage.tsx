import React from 'react';
import { useQuery } from 'react-query';
// import axios from 'axios';

interface Course {
  id: string;
  name: string;
}

const CoursesPage: React.FC = () => {
  const { data, isLoading, error } = useQuery<Course[]>('courses', async () => {
    const response = await new Promise<{ data: Course[] }>((resolve) => {
      setTimeout(() => {
        resolve({
          data: [
            { id: '1', name: 'Course 1' },
            { id: '2', name: 'Course 2' }
          ]
        });
      }, 1000);
    });
    // const response = await axios.get('/api/courses', { withCredentials: true });
    return response.data;
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading courses</p>;

  return (
    <div>
      <h1>Courses</h1>
      <ul>
        {data?.map((course) => (
          <li key={course.id}>{course.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default CoursesPage;
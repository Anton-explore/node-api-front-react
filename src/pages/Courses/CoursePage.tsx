import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { skipToken } from '@reduxjs/toolkit/query';
import { useDeleteCourseMutation, useGetCourseByIdQuery } from '../../api/coursesApi';
import CourseView from '../../components/Course/CourseView';


const CoursePage: React.FC = () => {
  const { courseId } = useParams<{ courseId: string }>();

  const navigate = useNavigate();

  const {
    data,
    isLoading,
    error
  } = useGetCourseByIdQuery(courseId ?? skipToken);

  console.log(data?.data);

  const [deleteCourse, { isLoading: isDeleting }] = useDeleteCourseMutation();


  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading course</p>;
  if (!data) return <p>No data</p>;

  const handleUpdate = () => {
  };

  const handleDelete = async () => {
    if (!courseId) { return; }
    await deleteCourse(courseId);
    navigate("/courses");
  };

  return (
    <div>
      <CourseView course={data?.data} />
      {/* <h2>{data?.data.title}</h2>
      <p>{data?.data.description}</p>
      <p>Created: { new Date(data?.data.createdAt).toLocaleDateString('ru-RU') }</p>
      <div className='app-flex'>
        <p>Required skills: {data?.data.minimumSkill}</p>
        <p>Scholarship: {data?.data.scholarshipAvailable ? 'YES' : 'NO'}</p>
      </div>
      <div className='app-flex'>
        <p>Course duration: { data?.data.weeks } weeks</p>
        <p>Course price: { data?.data.tuition } $</p>
      </div> */}
      <button onClick={handleUpdate}>Update</button>
      <button disabled={isDeleting} onClick={handleDelete}>Delete</button>
    </div>
  );
}

export default CoursePage;
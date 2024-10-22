import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { skipToken } from '@reduxjs/toolkit/query';
import { useDeleteCourseMutation, useGetCourseByIdQuery } from '../../api/coursesApi';


const CoursePage: React.FC = () => {
  const { courseId } = useParams<{ courseId: string }>();

  const navigate = useNavigate();

  const {
    data,
    isLoading,
    error
  } = useGetCourseByIdQuery(courseId ?? skipToken);

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
      <h2>{data?.data.title}</h2>
      <p>{ data?.data.description }</p>
      <button onClick={handleUpdate}>Update</button>
      <button disabled={isDeleting} onClick={handleDelete}>Delete</button>
    </div>
  );
}

export default CoursePage;
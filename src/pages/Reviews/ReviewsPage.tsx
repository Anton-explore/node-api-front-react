import React from 'react'
import { useParams } from 'react-router-dom';

const ReviewsPage: React.FC = () => {
  const { bootcampId } = useParams<{ bootcampId: string }>();

  return (
    <div>ReviewsPage for bootcamp { bootcampId }</div>
  )
}

export default ReviewsPage;
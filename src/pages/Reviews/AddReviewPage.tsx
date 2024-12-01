import React from 'react'
import { useParams } from 'react-router-dom';

const AddReviewPage: React.FC = () => {
  const { bootcampId } = useParams<{ bootcampId: string }>();

  return (
    <div>AddReviewPage for { bootcampId }</div>
  )
}

export default AddReviewPage;
import React from "react";
import DataImage from "../common/Image/Image";
import { Bootcamp } from "../../models/Bootcamp";


const BootcampView: React.FC<{
  data: Bootcamp;
  isDeleting: boolean;
  onDelete: () => void;
  onUpdate: () => void;
}> = ({ data, onUpdate, isDeleting, onDelete }) => {

  return (
    <>
      <div>
        <DataImage photo={data.photo} />
        <h4>Contact us</h4>
        <div className='app-flex'>
          <p>Email: { data.email }</p>
          <p>Phone: {data.phone}</p>
          <p>Website: { data.website }</p>
        </div>
      </div>
      <div>
        <h2>{data.name}</h2>
        <p>Description: {data.description}</p>
        <p>Careers: {data.careers.join(' | ')}</p>
        <div className='app-flex'>
          <p>Rating {data.averageRating}*</p>
          <p>Housing: {data.housing ? 'available' : 'unavailable'}</p>
          <p>Average cost: {data.averageCost }$</p>
        </div>
        <p>Created: {new Date(data.createdAt).toLocaleDateString('ru-RU')}</p>
        <h4>Job support</h4>
        <div className='app-flex'>
          <p>Help to find job: {data.jobAssistance ? 'YES' : 'NO'}</p>
          <p>Guaranteed employment: {data.jobGuarantee ? 'YES' : 'NO'}</p>
        </div>
        <button onClick={onUpdate}>Update</button>
        <button disabled={isDeleting} onClick={onDelete}>Delete</button>
      </div>
    </>
  )
}

export default BootcampView;
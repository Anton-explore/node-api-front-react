import React from 'react';
import './Image.css';
import { photoConverter } from '../../../utils/photoConverter';


export const DataImage: React.FC<{photo: string}> = ({ photo }) => {

  return (
      <img 
        src={photoConverter(photo)} 
        alt="Bootcamp Image" 
        className='img-thumbnail'
        // className="card-img-top app-image"
      />
  );
};

export default DataImage;
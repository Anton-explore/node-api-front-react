import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery, useMutation, useQueryClient } from 'react-query';
import axios from 'axios';

interface Bootcamp {
  id: string;
  name: string;
}

const BootcampPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const queryClient = useQueryClient();

  const { data, isLoading, error } = useQuery<Bootcamp>(['bootcamp', id], async () => {
    
    const response = await new Promise<{ data: Bootcamp }>((resolve) => {
        setTimeout(() => {
          resolve({
            data: { id: '1', name: 'Bootcamp 1' }
          });
        }, 1000);
      });
    // const response = await axios.get(`/api/bootcamps/${id}`, { withCredentials: true });
    return response.data;
  });

  const mutation = useMutation(
    (updatedData: Partial<Bootcamp>) => axios.put(`/api/bootcamps/${id}`, updatedData, { withCredentials: true }),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['bootcamp', id]);
      },
    }
  );

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading bootcamp</p>;

  const handleUpdate = () => {
    mutation.mutate({ name: 'Updated Bootcamp Name' });
  };

  const handleDelete = async () => {
    await new Promise<void>((resolve) => {
      setTimeout(() => {
        console.log('Deleted');
        resolve();
      }, 1000);
    });
    // await axios.delete(`/api/bootcamps/${id}`, { withCredentials: true })
  }

  return (
    <div>
      <h1>{data?.name}</h1>
      <button onClick={handleUpdate}>Update</button>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}

export default BootcampPage;
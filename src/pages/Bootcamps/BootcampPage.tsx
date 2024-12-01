import React, { useCallback, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
// import { useQuery, useMutation, useQueryClient } from 'react-query';
// import axios from 'axios';
// import { url } from '../MainPage';
// import { Bootcamp } from '../../models/Bootcamp';
import { useDeleteBootcampMutation, useGetBootcampByIdQuery } from '../../api/bootcampApi';
import { skipToken } from '@reduxjs/toolkit/query';
// import BootcampView from '../../components/Bootcamp/BootcampView';
import BootcampView2 from '../../components/Bootcamp/Bootcamp';


const BootcampPage: React.FC = () => {
  const { bootcampId } = useParams<{ bootcampId: string }>();

  const navigate = useNavigate();

  const {
    data,
    isLoading,
    error
  } = useGetBootcampByIdQuery(bootcampId ?? skipToken);

  const [deleteBootcamp, { isLoading: isDeleting, error: deleteError }] = useDeleteBootcampMutation();

  const slug = data?.data?.slug;

  useEffect(() => {
    if (slug && bootcampId !== slug) {
      window.history.replaceState(null, "", `/bootcamps/${slug}`);
      // navigate(`/bootcamps/${slug}`, { replace: true });
    }
  }, [bootcampId, slug]);

  const handleUpdate = useCallback(() => {
    if (!bootcampId) {
      console.error('Such bootcamp is missing');
      return;
    }
    console.log(bootcampId);
    // mutation.mutate({ name: 'Updated Bootcamp Name' });
  }, [bootcampId]);

  const handleDelete = useCallback(async () => {
    if (!bootcampId) {
      console.error('Such bootcamp is missing');
      return;
    }
    await deleteBootcamp(bootcampId);
    if (!deleteError) navigate("/bootcamps");
  }, [bootcampId, deleteError, deleteBootcamp, navigate]);
  
  // const queryClient = useQueryClient();

  // async function fetchData(id?: string) {
  //   if (!id) {
  //     throw new Error('Id not found!');
  //   }
  //   const response = await new Promise<{ data: Bootcamp }>((resolve) => {
  //   //   setTimeout(() => {
  //   //       console.log(id);
  //   //       resolve({
  //   //         data: { id: '1', name: 'Bootcamp 1' }
  //   //       });
  //   //     }, 1000);
  //   //   });
  //   const response = await axios.get(`${url}/${id}`, { withCredentials: true });
  //   return response.data.data;
  // }

  // const { data, isLoading, error } = useQuery<Bootcamp>(['bootcamp', id], () => fetchData(id));

  // const mutation = useMutation(
  //   (updatedData: Partial<Bootcamp>) => axios.put(`${url}/${id}`, updatedData, { withCredentials: true }),
  //   {
  //     onSuccess: () => {
  //       queryClient.invalidateQueries(['bootcamp', id]);
  //     },
  //   }
  // );

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading bootcamp</p>;
  if (!data) return <p>No data</p>;

  // const handleDelete = async () => {
  //   await new Promise<void>((resolve) => {
  //     setTimeout(() => {
  //       console.log('Deleted');
  //       resolve();
  //     }, 1000);
  //   });
  //   // await axios.delete(`/api/bootcamps/${id}`, { withCredentials: true })
  // }

  return (
    <div>
      <div className='app-flex'>
        {bootcampId &&
          <BootcampView2
            data={data?.data}
            isDeleting={isDeleting}
            onUpdate={handleUpdate}
            onDelete={handleDelete}
          />}
      </div>
    </div>
  );
}

export default BootcampPage;
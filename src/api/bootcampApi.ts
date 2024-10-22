import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Bootcamp, IBootcampResp, IBootcampsResp } from '../models/Bootcamp';
import { IPagination } from '../models/types';


export const baseUrl = 'https://node-api-courses.onrender.com/api/v1';

export const bootcampApi = createApi({
  reducerPath: 'bootcampApi',
  baseQuery: fetchBaseQuery({
    baseUrl,
  }),
  tagTypes: ['Bootcamp'],
  endpoints: (builder) => ({
    getBootcamps: builder.query<IBootcampsResp, IPagination>({
      query: ({ page = 1, limit = 25, select, sort }) => {
        let queryParams = `?page=${page}&limit=${limit}`;
        if (select) queryParams += `&select=${select}`;
        if (sort) queryParams += `&sort=${sort}`;

        return {
          url: `/bootcamps${queryParams}`,
          method: 'GET'
        };
      },
      providesTags: ['Bootcamp', { type: 'Bootcamp', id: 'LIST' }],
    }),
    getBootcampById: builder.query<IBootcampResp, string>({
      query: (id) => `/bootcamps/${id}`,
      providesTags: (_, __, id) => ['Bootcamp', { type: 'Bootcamp', id}],
    }),
    createBootcamp: builder.mutation<IBootcampResp, Partial<Bootcamp>>({
      query: (newBootcamp) => ({
        url: '/bootcamps',
        method: 'POST',
        body: newBootcamp,
      }),
      invalidatesTags: ['Bootcamp', { type: 'Bootcamp', id: 'LIST' }],
    }),
    updateBootcamp: builder.mutation<IBootcampResp, { id: string; data: Partial<Bootcamp> }>({
      query: ({ id, data }) => ({
        url: `/bootcamps/${id}`,
        method: 'PUT',
        body: data,
      }),
      invalidatesTags: (_, __, { id }) => [
        { type: 'Bootcamp', id: 'LIST' },
        { type: 'Bootcamp', id }
      ],
    }),
    deleteBootcamp: builder.mutation<{ success: boolean }, string>({
      query: (id) => ({
        url: `/bootcamps/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: (_, __, id) => [
        { type: 'Bootcamp', id: 'LIST' },
        { type: 'Bootcamp', id }
      ],
    }),
  }),
});

export const {
  useGetBootcampsQuery,
  useGetBootcampByIdQuery,
  useCreateBootcampMutation,
  useUpdateBootcampMutation,
  useDeleteBootcampMutation,
} = bootcampApi;
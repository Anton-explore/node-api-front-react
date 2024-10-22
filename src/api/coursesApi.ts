import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { baseUrl } from './bootcampApi';
import { Course, ICourseResp, ICoursesResp } from '../models/Course';
import { IPagination } from '../models/types';

export const coursesApi = createApi({
  reducerPath: 'coursesApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  tagTypes: ['Course'],
  endpoints: (builder) => ({
    getCourses: builder.query<ICoursesResp, IPagination>({
      query: ({ page = 1, limit = 25, select, sort }) => {
        let queryParams = `?page=${page}&limit=${limit}`;
        if (select) queryParams += `&select=${select}`;
        if (sort) queryParams += `&sort=${sort}`;

        return {
          url: `/courses${queryParams}`,
          method: 'GET'
        };
      },
      providesTags: ['Course'],
    }),
    getCoursesByBootcamp: builder.query<ICoursesResp, { bootcampId?: string }>({
      query: ({ bootcampId }) => `/courses?bootcamp=${bootcampId}`,
      providesTags: ['Course'],
    }),
    getCourseById: builder.query<ICourseResp, string>({
      query: (id) => `/courses/${id}`,
      providesTags: ['Course'],
    }),
    addCourse: builder.mutation<ICourseResp, Partial<Course>>({
      query: (course) => ({
        url: `/courses`,
        method: 'POST',
        body: course,
      }),
      invalidatesTags: ['Course'],
    }),
    updateCourse: builder.mutation<ICourseResp, { id: string; course: Partial<Course> }>({
      query: ({ id, course }) => ({
        url: `/courses/${id}`,
        method: 'PUT',
        body: course,
      }),
      invalidatesTags: ['Course'],
    }),
    deleteCourse: builder.mutation<{ success: boolean }, string>({
      query: (id) => ({
        url: `/courses/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Course'],
    }),
  }),
});

export const {
  useGetCoursesQuery,
  useGetCoursesByBootcampQuery,
  useGetCourseByIdQuery,
  useAddCourseMutation,
  useUpdateCourseMutation,
  useDeleteCourseMutation
} = coursesApi;
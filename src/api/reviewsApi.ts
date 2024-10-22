import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { baseUrl } from './bootcampApi';
import { IReviewResp, IReviewsResp, Review } from '../models/Review';
import { IPagination } from '../models/types';


export const reviewsApi = createApi({
  reducerPath: 'reviewsApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  tagTypes: ['Review'],
  endpoints: (builder) => ({
    getReviews: builder.query<IReviewsResp, IPagination>({
      query: ({ page = 1, limit = 25, select, sort }) => {
        let queryParams = `?page=${page}&limit=${limit}`;
        if (select) queryParams += `&select=${select}`;
        if (sort) queryParams += `&sort=${sort}`;

        return {
          url: `/reviews${queryParams}`,
          method: 'GET'
        };
      },
      providesTags: ['Review'],
    }),
    getReviewsByBootcamp: builder.query<IReviewsResp, { bootcampId: string }>({
      query: ({ bootcampId }) => `/reviews?bootcamp=${bootcampId}`,
      providesTags: ['Review'],
    }),
    getReviewById: builder.query<IReviewResp, string>({
      query: (id) => `/reviews/${id}`,
      providesTags: ['Review'],
    }),
    addReview: builder.mutation<IReviewResp, { bootcampId: string; review: Partial<Review> }>({
      query: ({ bootcampId, review }) => ({
        url: `/bootcamps/${bootcampId}/reviews`,
        method: 'POST',
        body: review,
      }),
      invalidatesTags: ['Review'],
    }),
    updateReview: builder.mutation<IReviewResp, { id: string; review: Partial<Review> }>({
      query: ({ id, review }) => ({
        url: `/reviews/${id}`,
        method: 'PUT',
        body: review,
      }),
      invalidatesTags: ['Review'],
    }),
    deleteReview: builder.mutation<{ success: boolean }, string>({
      query: (id) => ({
        url: `/reviews/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Review'],
    }),
  }),
});

export const {
  useGetReviewsQuery,
  useGetReviewsByBootcampQuery,
  useAddReviewMutation,
  useUpdateReviewMutation,
  useDeleteReviewMutation
} = reviewsApi;
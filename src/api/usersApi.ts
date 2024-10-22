import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { baseUrl } from './bootcampApi';
import { ITokenResp, IUserResp, User } from '../models/User';


export const usersApi = createApi({
  reducerPath: 'usersApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  tagTypes: ['User'],
  endpoints: (builder) => ({
    login: builder.mutation<ITokenResp, Partial<User>>({
      query: (credentials) => ({
        url: `/auth/login`,
        method: 'POST',
        body: credentials,
        credentials: 'include', // For HttpOnly cookie authentication
      }),
      invalidatesTags: ['User'],
    }),
    signUp: builder.mutation<ITokenResp, Partial<User>>({
      query: (user) => ({
        url: `/auth/register`,
        method: 'POST',
        body: user,
      }),
      invalidatesTags: ['User'],
    }),
    logout: builder.mutation<void, void>({
      query: () => ({
        url: `/auth/logout`,
        method: 'POST',
        credentials: 'include',
      }),
      invalidatesTags: ['User'],
    }),
    getCurrentUser: builder.query<IUserResp, void>({
      query: () => ({
        url: `/auth/user`,
        method: 'GET',
        credentials: 'include',
      }),
      providesTags: ['User'],
    }),
  }),
});

export const {
  useLoginMutation,
  useSignUpMutation,
  useLogoutMutation
} = usersApi;
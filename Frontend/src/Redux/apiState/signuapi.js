// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const ApiState = createApi({
  reducerPath: 'ApiState',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/api/auth',credentials: 'include' }),
  endpoints: (builder) => ({
    signup: builder.mutation({
      query: (formData) => ({
        url: '/register',
        method: 'POST',
        body: formData,
      }),
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useSignupMutation } = ApiState
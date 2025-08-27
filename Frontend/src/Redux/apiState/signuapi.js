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
    signin:builder.mutation({
      query:(formData)=>({
        url:'/login',
        method:'POST',
        body:formData,
      })
    }),
    session:builder.query({
      query:()=>({
        url:'/me',
        method:"GET"
      })
    })
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useSignupMutation, useSigninMutation,useSessionQuery } = ApiState
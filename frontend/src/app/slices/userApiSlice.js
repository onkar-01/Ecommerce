// import { apiSlice } from "./apiSlice";

// const USER_URL = "http://localhost:8080/api/users";

// export const userApiSlice = apiSlice.injectEndpoints({
//   endpoints: (builder) => ({
//     register: builder.mutation({
//       query: (body) => ({
//         mode: "no-cors",
//         url: `${USER_URL}/`,
//         method: "POST",
//         body,
//       }),
//     }),
//     login: builder.mutation({
//       query: (body) => ({
//         url: `${USER_URL}/auth`,
//         method: "POST",
//         body,
//       }),
//     }),

//     logout: builder.mutation({
//       query: () => ({
//         url: `${USER_URL}/logout`,
//         method: "POST",
//       }),
//     }),
//   }),
// });

// export const { useRegisterMutation, useLoginMutation, useLogoutMutation } =
//   userApiSlice;

import { apiSlice } from "./apiSlice";

const USERS_URL = "/api/v1";

export const userApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/login`,
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }),
    }),
    logout: builder.mutation({
      query: () => ({
        url: `${USERS_URL}/logout`,
        method: "GET",
      }),
    }),
    register: builder.mutation({
      query: (formData) => ({
        url: `${USERS_URL}/register`,
        method: "POST",
        body: formData,
        credentials: "include",
      }),
    }),
    updateUser: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/profile`,
        method: "PUT",

        body: JSON.stringify(data),
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useLogoutMutation,
  useRegisterMutation,
  useUpdateUserMutation,
} = userApiSlice;

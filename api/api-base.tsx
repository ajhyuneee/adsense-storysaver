'use client';

import Axios, { AxiosInstance } from 'axios';
import { API_SERVER } from '../config/config';

// const authToken = {
//   accessToken: '',
// };

// const baseApi = () => {
//   const api = Axios.create({
//     baseURL: `${API_SERVER}`,
//     headers: {
//       'Content-Type': 'application/json',
//       'Access-Control-Allow-Origin': '*',
//       AUTHORIZATION: authToken?.accessToken,
//     },
//   });

//   api.interceptors.response.use(
//     (response) => response,
//     async (error) => {
//       return error.response;
//     },
//   );

//   return api;
// };

export const notLoginedApi: AxiosInstance = Axios.create({
  baseURL: `${API_SERVER}`,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
});

import { BASE_API_URL } from '@/netlify/constants/api';
import axios from 'axios';
import 'dotenv/config';

const axiosInstance = axios.create({
  baseURL: BASE_API_URL,
  headers: {
    Authorization: process.env.OPEN_API_KEY,
    'Content-Type': 'application/json; charset=UTF-8',
  },
});

export default axiosInstance;

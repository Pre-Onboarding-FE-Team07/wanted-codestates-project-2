import { BASE_API_URL } from '@/constants/api';
import axios from 'axios';
import 'dotenv/config';

const axiosInstance = axios.create({
  baseURL: BASE_API_URL,
  headers: {
    Authorization: process.env.OPEN_API_KEY,
  },
});

export default axiosInstance;

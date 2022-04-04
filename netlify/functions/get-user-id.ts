import { Handler } from '@netlify/functions';
import axiosInstance from '@/netlify/utils/axios';
import axios from 'axios';
import { API_URL } from '@/netlify/constants/api';

type DataType = {
  accessId: string;
  name: string;
  level: number;
}

export const handler: Handler = async (event) => {
  const { username } = event.queryStringParameters || {};

  if (!username) {
    return {
      statusCode: 404,
      body: JSON.stringify({ message: 'User not found' }),
    };
  }

  try {
    const { status, data } = await axiosInstance.get(API_URL.GET_USER_ID_BY_USERNAME(username));
    const { accessId } = data as DataType;

    return {
      statusCode: status,
      body: JSON.stringify({ userId: accessId }),
    };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error(error.message);
      const { code } = error;

      return {
        statusCode: Number(code) || 404,
        body: JSON.stringify({ message: 'User not found' }),
      };
    }

    console.error(error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Internal Server Error' }),
    };
  }
};

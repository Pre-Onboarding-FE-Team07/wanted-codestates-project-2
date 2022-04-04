import { Handler } from '@netlify/functions';
import axiosInstance from '@/netlify/utils/axios';
import { API_URL } from '@/netlify/constants/api';
import { protectHandler } from '@/netlify/utils/error-handler';

type DataType = {
  accessId: string;
  name: string;
  level: number;
}

export const handler: Handler = protectHandler(async (event) => {
  const { username } = event.queryStringParameters || {};

  if (!username) {
    return {
      statusCode: 404,
      body: JSON.stringify({ message: 'User not found' }),
    };
  }

  const url = API_URL.GET_USER_ID_BY_USERNAME(username);
  const { status, data } = await axiosInstance.get(url);
  const { accessId } = data as DataType;

  return {
    statusCode: status,
    body: JSON.stringify({ userId: accessId }),
  };
});

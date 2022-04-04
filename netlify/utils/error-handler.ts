import { Handler } from '@netlify/functions';
import axios from 'axios';

export function protectHandler(handler: Handler) {
  return async (...args: Parameters<Handler>) => {
    try {
      const response = await handler(...args);
      if (response) return response;
      throw Error();
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
}

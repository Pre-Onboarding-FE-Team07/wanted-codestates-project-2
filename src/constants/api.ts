const production = process.env.NODE_ENV === 'production';

export const API_URL = production ? '/api' : '/.netlify/functions';

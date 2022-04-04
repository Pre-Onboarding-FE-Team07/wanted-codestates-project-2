import { API_URL } from '@/constants/api';
import { ActionTypes } from '@/store/types';
import { Payload } from '@/types/vuex';
import axios from 'axios';
import { createStore } from 'vuex';

export default createStore<{
  currentRoute: string;
}>({
  state: {
    currentRoute: '/',
  },
  getters: {
  },
  mutations: {
  },
  actions: {
    async [ActionTypes.GET_USER_ID](_, payload: Payload) {
      const url = `${API_URL}/get-user-id?username=${payload.queries?.username}`;
      try {
        const { data: message } = await axios.get(url);
        return message as string;
      } catch (error) {
        return null;
      }
    },
  },
  modules: {
  },
});

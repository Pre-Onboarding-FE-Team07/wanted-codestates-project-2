import { ActionTypes } from '@/store/types';
import fetcher, { formatQueries } from '@/utils/fetcher';
import { createStore } from 'vuex';

export type Payload = {
  variables: {
    id?: string;
    name?: string;
  },
  queries?: {
    startDate?: string;
    endDate?: string;
    offset?: number;
    limit?: number;
    matchTypes?: string;
  },
}

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
    async [ActionTypes.GET_USER_INFO_BY_NAME](context, payload: Payload) {
      try {
        return await fetcher(`${process.env.VUE_APP_OPEN_API_URL}/users/nickname/${payload.variables.name}`);
      } catch (error) {
        return null;
      }
    },
    async [ActionTypes.GET_MATCH_LIST_BY_ID](context, payload: Payload) {
      try {
        const queries = formatQueries(payload.queries || {});
        return await fetcher(`${process.env.VUE_APP_OPEN_API_URL}/users/${payload.variables.id}/matches${queries}`);
      } catch (error) {
        return null;
      }
    },
  },
  modules: {
  },
});

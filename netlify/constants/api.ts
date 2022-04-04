import { QueryParameters } from '@/netlify/types/api';
import { formatQueries } from '@/netlify/utils/format';

export const BASE_API_URL = 'https://api.nexon.co.kr/kart/v1.0';

export const API_URL = {
  GET_USER_ID_BY_USERNAME: (username: string) => encodeURI(`/users/nickname/${username}`),
  GET_USERNAME_BY_USER_ID: (userId: string) => `/users/${userId}`,
  GET_MATCH_LIST_BY_USER_ID: (userId: string, queries?: QueryParameters) => `/users/${userId}/matches${formatQueries(queries)}`,
  GET_ALL_MATCH_LIST: (queries?: QueryParameters) => `/matches${formatQueries(queries)}`,
  GET_MATCH_INFO_BY_MATCH_ID: (matchId: string) => `/matches/${matchId}`,
} as const;

export const RESOURCE_URL = {
  KART_NAMES: 'https://tmi.nexon.com/apis/KartNames',
  TRACK_NAMES: 'https://tmi.nexon.com/apis/TrackNames',
  AVATAR: (characterId: string) => `https://s3-ap-northeast-1.amazonaws.com/solution-userstats/metadata/character/${characterId}.png`,
  KART_IMG: (kartId: string) => `https://s3-ap-northeast-1.amazonaws.com/solution-userstats/metadata/kart/${kartId}.png`,
  TRACK_IMG: (category: string) => `https://s3-ap-northeast-1.amazonaws.com/solution-userstats/kartimg/Category/${category}.png`,
};

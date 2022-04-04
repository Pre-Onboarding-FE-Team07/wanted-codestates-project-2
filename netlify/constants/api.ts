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
} as const;

export const MatchType = {
  BATTLE: 'ee2426e23fa56f7a695084e1fc07fe6bb03a0b3b0c71c4e1f1b7e7e78e6c6878',
  SPEED_TEAM_COMB: 'effd66758144a29868663aa50e85d3d95c5bc0147d7fdb9802691c2087f3416e',
  SPEED_INDI_COMB: '7b9f0fd5377c38514dbb78ebe63ac6c3b81009d5a31dd569d1cff8f005aa881a',
  ITEM_TEAM_COMB: '14e772d195642279cf6c8307125044274db371c1b08fc3dd6553e50d76d2b3aa',
  ITEM_INDI_COMB: '7ca6fd44026a2c8f5d939b60aa56b4b1714b9cc2355ec5e317154d4cf0675da0',
  CLUB_RACE_SPEED: '826ecdb309f3a2b80a790902d1b133499866d6b933c7deb0916979d1232f968c',
} as const;

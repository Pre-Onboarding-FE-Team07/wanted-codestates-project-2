import { API_URL } from '@/netlify/constants/api';
import { MatchDetailInfo, MatchDetailsDTO } from '@/netlify/types/api';
import axiosInstance from '@/netlify/utils/axios';
import { protectHandler } from '@/netlify/utils/error-handler';
import { getKartByHash } from '@/netlify/utils/resource';
import { getLapTime } from '@/netlify/utils/time';
import { Handler } from '@netlify/functions';

type Query = {
  matchId?: string;
}

export const handler: Handler = protectHandler(async (event) => {
  const { matchId }: Query = event.queryStringParameters || {};

  if (!matchId) {
    return {
      statusCode: 404,
      body: JSON.stringify({ message: 'Match not found' }),
    };
  }

  const url = API_URL.GET_MATCH_INFO_BY_MATCH_ID(matchId);

  const { status, data } = await axiosInstance.get<MatchDetailsDTO>(url);

  const matchDetailInfo: MatchDetailInfo[] = [];

  if (data.players) {
    const { players } = data;
    players.forEach((player) => {
      const retire = player.matchRetired === '1';
      matchDetailInfo.push({
        userId: player.accountNo,
        username: player.characterName,
        kart: getKartByHash(player.kart),
        lapTime: retire ? '-' : getLapTime(+player.matchTime),
        rank: retire ? 8 : +player.matchRank,
        retire,
      });
    });
  }

  matchDetailInfo.sort((a, b) => +a.rank - +b.rank);

  return {
    statusCode: status,
    body: JSON.stringify(matchDetailInfo),
  };
});

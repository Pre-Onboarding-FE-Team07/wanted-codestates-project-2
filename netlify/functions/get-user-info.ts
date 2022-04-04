import { API_URL, MatchType } from '@/netlify/constants/api';
import {
  MatchData, MatchRecord, RankChartData, RankInfo,
} from '@/netlify/types/api';
import axiosInstance from '@/netlify/utils/axios';
import { protectHandler } from '@/netlify/utils/error-handler';
import { getKartByHash, getTrackByHash } from '@/netlify/utils/rosource';
import { getLapTime, getTimeDiff } from '@/netlify/utils/time';
import { Handler } from '@netlify/functions';
import { AxiosResponse } from 'axios';

type Query = {
  userId?: string;
  matchType?: 'team' | 'solo';
};

const getMatchTypeHash = (matchType: Query['matchType']) => (matchType === 'solo' ? MatchType.INDI : MatchType.TEAM);

export const handler: Handler = protectHandler(async (event) => {
  const { userId, matchType }: Query = event.queryStringParameters || {};

  if (!userId) {
    return {
      statusCode: 404,
      body: JSON.stringify({ message: 'UserID required' }),
    };
  }

  const url = API_URL.GET_MATCH_LIST_BY_USER_ID(userId, {
    limit: 500,
    match_types: getMatchTypeHash(matchType || 'solo'),
  });

  const { status, data }: AxiosResponse<MatchData> = await axiosInstance.get(url);

  const { matches: [{ matches }], nickName } = data;

  const rankInfo: RankInfo = {
    totalGame: matches.length,
    count: {
      win: 0,
      goal: 0,
      retire: 0,
    },
    rate: {
      win: 0,
      goal: 0,
      retire: 0,
    },
  };

  const rankChartData: RankChartData = {
    labels: [],
    data: [],
    total: {
      gameCount: 0,
      rankRate: 0,
    },
    recent: {
      gameCount: 0,
      rankRate: 0,
    },
  };

  const records: MatchRecord[] = [];

  let totalRank = 0;
  let recentRank = 0;
  matches.forEach((match, i) => {
    const { player } = match;
    const retire = player.matchRetired === '1';
    const matchRank = retire ? 8 : +player.matchRank;
    rankInfo.count.win += +player.matchWin;
    rankInfo.count.retire += +retire;
    rankInfo.count.goal += +!retire;
    totalRank += +matchRank;
    rankChartData.total.gameCount += 1;
    if (i < 50) {
      rankChartData.recent.gameCount += 1;
      rankChartData.labels.push(`이전 ${i + 1}경기`);
      rankChartData.data.push(matchRank);
      recentRank += +matchRank;
    }
    records.push({
      matchId: match.matchId,
      playerCount: match.playerCount,
      rank: matchRank,
      matchTime: retire ? '-' : getLapTime(+player.matchTime),
      kart: getKartByHash(player.kart),
      track: getTrackByHash(match.trackId),
      win: player.matchWin === '1',
      retire: player.matchRetired === '1',
      relTime: getTimeDiff(new Date(match.endTime)),
    });
  });

  const totalGame = rankChartData.total.gameCount;
  const recentGame = rankChartData.recent.gameCount;
  rankInfo.rate.win = Math.round((rankInfo.count.win / totalGame) * 100);
  rankInfo.rate.retire = Math.round((rankInfo.count.retire / totalGame) * 100);
  rankInfo.rate.goal = 100 - rankInfo.rate.retire;

  rankChartData.total.rankRate = +(totalRank / totalGame).toFixed(2);
  rankChartData.recent.rankRate = +(recentRank / recentGame).toFixed(2);

  rankChartData.data.reverse();
  rankChartData.labels.reverse();

  return {
    statusCode: status,
    body: JSON.stringify({
      userId,
      username: nickName,
      rankInfo,
      rankChartData,
      records,
    }),
  };
});

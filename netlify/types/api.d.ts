/* eslint-disable camelcase */

export type QueryParameters = {
  /**
   * 조회 시작 날짜 (UTC) (ex: 2019-02-15 01:00:00)
   */
  start_data?: string;

  /**
   * 조회 끝 날짜 (UTC) (ex: 2019-02-15 02:00:00)
   */
  end_data?: string;

  /**
   * 조회 오프셋
   */
  offset?: number;

  /**
   * 조회 수
   */
  limit?: number;

  /**
   * 매치 타입 HashID 목록 (콤마(',')로 구분된 문자열)
   */
  match_types?: string;
};

export type Player = {
  accountNo: string;
  character: string;
  characterName: string;
  flyingPet: string;
  kart: string;
  license: string;
  matchRank: string;
  matchRetired: string;
  matchTime: string;
  matchWin: string;
  partsEngine: string;
  partsHandle: string;
  partsKit: string;
  partsWheel: string;
  pet: string;
  rankinggrade2: string;
};

export type Match = {
  accountNo: string;
  channelName: string;
  character: string;
  endTime: string;
  matchId: string;
  matchResult: string;
  matchType: string;
  player: Player;
  playerCount: number;
  seasonType: string;
  startTime: string;
  teamId: string;
  trackId: string;
};

export type MatchData = {
  nickName: string;
  matches: Array<{
    matchType: string;
    matches: Array<Match>;
  }>
};

export type RankInfo = {
  totalGame: number;
  count: {
    win: number;
    goal: number;
    retire: number;
  }
  rate: {
    win: number;
    goal: number;
    retire: number;
  }
};

export type RankChartData = {
  labels: string[],
  data: number[];
  total: {
    gameCount: number;
    rankRate: number;
  };
  recent: {
    gameCount: number;
    rankRate: number;
  }
};

export type Kart = {
  hash: string;
  name: string;
  img: string;
};

export type Track = {
  hash: string;
  name: string;
  img: string;
};

export type MatchRecord = {
  matchId: string;
  playerCount: number;
  rank: number;
  matchTime: string;
  kart: Kart;
  track: Track;
  win: boolean;
  retire: boolean;
  relTime: string;
};

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

export type MatchResponse = {
  nickname: string;
  matches: Array<{
    matchType: string;
    matches: Array<Match>;
  }>
};

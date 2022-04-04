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

export type PlayerDTO = {
  /**
   * 사용자 식별 번호
   */
  accountNo: string;

  /**
   * 캐릭터 hash
   */
  character: string;

  /**
   * 계정 닉네임
   */
  characterName: string;

  /**
   * 아이템(카트)
   */
  kart: string;

  /**
   * 순위
   */
  matchRank: string;

  /**
   * 리타이어 여부 ("1" | "0")
   */
  matchRetired: string;

  /**
   * 매치 진행 시간
   */
  matchTime: string;

  /**
   * 승리 여부 ("1" | "0")
   */
  matchWin: string;
};

export type MatchInfoDTO = {
  /**
   * 사용자 식별 번호
   */
  accountNo: string;

  /**
   * 캐릭터 hash
   */
  character: string;

  /**
   * 매치 아이디
   */
  matchId: string;

  /**
   * 게임 시작 시간
   */
  startTime: string;
  /**
   * 게임 종료 시간
   */
  endTime: string;

  /**
   * 매치 게임 유형
   */
  matchType: string;

  /**
   * 참여 유저 정보
   */
  player: PlayerDTO;

  /**
   * 참여 사용자 수
   */
  playerCount: string;

  /**
   * 매치 팀 아이디
   */
  teamId: string;

  /**
   * 매치 트랙 아이디
   */
  trackId: string;
};

export type MatchDTO = {
  /**
   * 매치 유형
   */
  matchType: string;

  /**
   * 매치 상세 정보 목록
   */
  matches: Array<MatchInfoDTO>;
}

export type TeamDTO = {
  /**
   * 팀 아이디
   */
  teamId: string;

  /**
   * 참여 유저 정보 목록
   */
  players: Array<PlayerDTO>;
}

export type MatchResponseDTO = {
  /**
   * 계정 닉네임
   */
  nickName: string;

  /**
   *
   */
  matches: Array<MatchDTO>
};

export type MatchDetailsDTO = {
  /**
   * 매치 아이디
   */
  matchId: string;

  /**
   * 매치 종류
   */
  matchType: string;

  /**
   * 게임 시작 시간
   */
  startTime: string;

  /**
   * 게임 종료 시간
   */
  endTime: string;

  /**
   * 게임 진행 시간
   */
  playTime: string;

  /**
   * 참여 팀 정보 목록 (팀전)
   */
  teams?: Array<TeamDTO>;

  /**
   * 참여 사용자 정보 목록 (개인전)
   */
  players?: Array<PlayerDTO>;
}

export type RankInfo = {
  /**
   * 총 매치 수
   */
  totalGame: number;

  /**
   * 승리, 완주, 리타이어 횟수
   */
  count: {
    /**
     * 승리 횟수
     */
    win: number;

    /**
     * 완주 횟수
     */
    goal: number;

    /**
     * 라타이어 횟수
     */
    retire: number;
  }

  /**
   * 승리, 완주, 리타이어 비율
   */
  rate: {
    /**
     * 승리 비율
     */
    win: number;

    /**
     * 완주 비율
     */
    goal: number;

    /**
     * 리타이어 비율
     */
    retire: number;
  }
};

export type RankChartData = {
  /**
   * 차트 라벨
   */
  labels: string[],

  /**
   * 차트 데이터
   */
  data: number[];

  /**
   * 전체 게임 정보
   */
  total: {
    /**
     * 전체 게임 횟수
     */
    gameCount: number;

    /**
     * 전체 게임 순위 비율
     */
    rankRate: number;
  };

  /**
   * 최근 게임 정보
   */
  recent: {
    /**
     * 최근 게임 횟수
     */
    gameCount: number;

    /**
     * 최근 게임 순위 비율
     */
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
  userId: string;
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

export type ModeType = 'team' | 'solo';

export type SpeedType = 'combine' | 'fastest' | 'infinite';

export type MatchDetailInfo = {
  userId: string;
  username: string;
  kart: Kart;
  lapTime: string;
  retire: boolean;
  rank: number | string;
}

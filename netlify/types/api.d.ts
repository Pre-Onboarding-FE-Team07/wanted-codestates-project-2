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
  offset?: string;

  /**
   * 조회 수
   */
  limit?: string;

  /**
   * 매치 타입 HashID 목록 (콤마(',')로 구분된 문자열)
   */
  match_types?: string;
};

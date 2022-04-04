export type Payload = {
  queries?: {
    username?: string;
    userId?: string;
    matchId?: string;
    matchType?: 'solo' | 'team';
  }
}

export type Payload = {
  queries?: {
    username?: string;
    userId?: string;
    matchType?: 'solo' | 'team';
  }
}

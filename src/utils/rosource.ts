import kartInfo from '@/data/kart-info.json';
import trackInfo from '@/data/track-info.json';

export function getKartByHash(hash: string) {
  const kart = kartInfo.data.find((k) => k.hash === hash);
  return {
    hash: kart?.hash || '',
    kartName: kart?.KartName || '',
    kartImg: `https://s3-ap-northeast-1.amazonaws.com/solution-userstats/metadata/kart/${hash}.png?v=1648177934`,
  };
}

export function getTrackByHash(hash: string) {
  const track = trackInfo.data.find((t) => t.hash === hash);
  return {
    hash: track?.hash || '',
    trackName: track?.TrackName || '',
    trackImg: `https://s3-ap-northeast-1.amazonaws.com/solution-userstats/kartimg/Category/${track?.category}_1.png`,
  };
}

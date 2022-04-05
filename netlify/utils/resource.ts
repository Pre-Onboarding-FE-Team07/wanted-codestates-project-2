import kartInfo from '@/netlify/data/kart-info.json';
import trackInfo from '@/netlify/data/track-info.json';
import { RESOURCE_URL } from '@/netlify/constants/api';
import { Kart, Track } from '@/netlify/types/api';

export function getKartByHash(hash: string): Kart {
  const kart = kartInfo.data.find((k) => k.hash === hash);
  return {
    hash: kart?.hash || '',
    name: kart?.KartName || '',
    img: RESOURCE_URL.KART_IMG(hash),
  };
}

export function getTrackByHash(hash: string): Track {
  const track = trackInfo.data.find((t) => t.hash === hash);
  return {
    hash: track?.hash || '',
    name: track?.TrackName || '',
    img: RESOURCE_URL.TRACK_IMG(track?.category || ''),
  };
}

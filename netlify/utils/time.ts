export function getLapTime(time: number) {
  let copied = time;
  const ms = copied % 1000;
  copied = (copied - ms) / 1000;
  const sec = copied % 60;
  copied = (copied - sec) / 60;
  const min = copied % 60;
  return `${min}'${String(sec).padStart(2, '0')}'${String(ms).slice(0, 2)}`;
}

export function getTimeDiff(date: Date) {
  const now = new Date();
  let ms = now.getTime() - date.getTime();

  const d = Math.floor(ms / 24 / 1000 / 60 / 60);
  ms -= d * 24 * 1000 * 60 * 60;
  const h = Math.floor(ms / 1000 / 60 / 60);
  ms -= h * 1000 * 60 * 60;
  const m = Math.floor(ms / 1000 / 60);
  ms -= m * 1000 * 60;
  const s = Math.floor(ms / 1000);
  ms -= s * 1000;

  if (d) return `${d}일 전`;
  if (h) return `${h}시간 전`;
  if (m) return `${m}분 전`;
  return `${s}초 전`;
}

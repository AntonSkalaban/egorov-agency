export const findTime = (diff) => {
  const days = Math.floor(diff / 1000 / 60 / 60 / 24);
  const hours = Math.floor(diff / 1000 / 60 / 60) % 24;
  const minutes = Math.floor(diff / 1000 / 60) % 60;
  const seconds = Math.floor(diff / 1000) % 60;

  return [days, hours, minutes, seconds];
};

export const getTime = (diff) => {
  if (diff < 10) return `0${diff}`;
  if (diff < 0) return '0';
  return diff;
};

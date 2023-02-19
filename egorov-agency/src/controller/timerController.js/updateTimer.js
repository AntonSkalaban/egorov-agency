export const updateTimer = (
  daysCounter,
  hoursCounter,
  minutesCounter,
  secondsCounter,
  deadline,
  intervalId
) => {

  const diff = deadline - new Date();
  if (diff <= 0) clearInterval(intervalId);

  const time = findTime(diff);

  daysCounter.textContent = getTime(time[0]);
  hoursCounter.textContent = getTime(time[1]);
  minutesCounter.textContent = getTime(time[2]);
  secondsCounter.textContent = getTime(time[3]);
};

const findTime = (diff) => {
  const days = Math.floor(diff / 1000 / 60 / 60 / 24);
  const hours = Math.floor(diff / 1000 / 60 / 60) % 24;
  const minutes = Math.floor(diff / 1000 / 60) % 60;
  const seconds = Math.floor(diff / 1000) % 60;

  return [days, hours, minutes, seconds];
};

const getTime = (diff) => {
  if (diff < 10) return `0${diff}`;
  if (diff < 0) return '0';
  return diff;
};

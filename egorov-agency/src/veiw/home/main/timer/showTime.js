import { findTime, getTime } from '../../../../controller/timerController/timeController';

const showTime = (daysCounter, hoursCounter, minutesCounter, secondsCounter, deadline, intervalId) => {
  const diff = deadline - new Date();
  if (diff <= 0) clearInterval(intervalId);

  const time = findTime(diff);

  daysCounter.textContent = getTime(time[0]);
  hoursCounter.textContent = getTime(time[1]);
  minutesCounter.textContent = getTime(time[2]);
  secondsCounter.textContent = getTime(time[3]);
};

export default showTime;

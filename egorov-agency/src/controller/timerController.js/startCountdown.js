import { updateTimer } from "./updateTimer";

export const startCountdown = () => {
  const daysCounter = document.querySelector('.timer__time-counter_days');
  const hoursCounter = document.querySelector('.timer__time-counter_hours');
  const minutesCounter = document.querySelector('.timer__time-counter_minutes');
  const secondsCounter = document.querySelector('.timer__time-counter_seconds');

  const deadline = new Date('2023/05/31');

  const intervalId = setInterval(
    () =>
      updateTimer(
        daysCounter,
        hoursCounter,
        minutesCounter,
        secondsCounter,
        deadline,
        intervalId
      ),
    1000
  );
};

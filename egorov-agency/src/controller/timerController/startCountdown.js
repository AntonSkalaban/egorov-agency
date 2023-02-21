import showTime from "../../veiw/home/main/timer/showTime";

const startCountdown = () => {
  const daysCounter = document.querySelector('.timer__counter_days');
  const hoursCounter = document.querySelector('.timer__counter_hours');
  const minutesCounter = document.querySelector('.timer__counter_minutes');
  const secondsCounter = document.querySelector('.timer__counter_seconds');

  const deadline = new Date('2023/05/31');

  const intervalId = setInterval(
    () => showTime(daysCounter, hoursCounter, minutesCounter, secondsCounter, deadline, intervalId),
    1000
  );
};

export default startCountdown;

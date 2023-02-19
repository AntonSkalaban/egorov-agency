import createElement from '../../../helpers/element';
import createTimerComponent from './timerComponents';
import './style.css';

const createTimer = () => {
  const timer = createElement('div', 'main__timer');

  const timerDaysComponent = createTimerComponent('days');
  const timerHoursComponent = createTimerComponent('hours');
  const timerMinutesComponent = createTimerComponent('minutes');
  const timerSecondsComponent = createTimerComponent('seconds');
  const colons = createElement('p', 'timer-colons', 'timer__time-counter-text');
  colons.textContent = ':';

  timer.append(timerDaysComponent);
  timer.append(colons);
  timer.append(timerHoursComponent);
  timer.append(colons.cloneNode(true));
  timer.append(timerMinutesComponent);
  timer.append(colons.cloneNode(true));
  timer.append(timerSecondsComponent);

  return timer;
};

export default createTimer;

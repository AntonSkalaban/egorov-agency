import createElement from '../../../helpers/element';
import createTimerComponent from './timerComponents';
import './style.css';

const createTimer = () => {
  const timer = createElement('div', 'main__timer');
  const timeContainer = createElement('div', 'timer__time-container');
  const timerDaysComponent = createTimerComponent('days');
  const timerHoursComponent = createTimerComponent('hours');
  const timerMinutesComponent = createTimerComponent('minutes');
  const timerSecondsComponent = createTimerComponent('seconds');
  const colons = createElement('p', 'timer-colons', 'timer__counter');
  colons.textContent = ':';

  timer.append(timeContainer);
  timeContainer.append(timerDaysComponent);
  timeContainer.append(colons);
  timeContainer.append(timerHoursComponent);
  timeContainer.append(colons.cloneNode(true));
  timeContainer.append(timerMinutesComponent);
  timeContainer.append(colons.cloneNode(true));
  timeContainer.append(timerSecondsComponent);

  return timer;
};

export default createTimer;

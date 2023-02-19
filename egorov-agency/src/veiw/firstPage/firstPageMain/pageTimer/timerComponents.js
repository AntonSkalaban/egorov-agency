import createElement from '../../../helpers/element';

const createTimerComponent = (title) => {
  const component = createElement('div', 'timer-component');
  const timeContainer = createElement('div', `timer__time-container`);
  const timeCounter = createElement('p', 'timer__time-counter-text', `timer__time-counter_${title}`);
  const timeTypeContainer = createElement('div', 'timer__time-type');
  const timeTypeText = createElement('p', 'timer__time-text', 'subtitle_white');
  

  timeTypeText.textContent = title;

  component.append(timeContainer);
  timeContainer.append(timeCounter);

  component.append(timeTypeContainer);
  timeTypeContainer.append(timeTypeText);
  return component;
};

export default createTimerComponent;

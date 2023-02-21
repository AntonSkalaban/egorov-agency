import createElement from '../../../helpers/element';

const createTimerComponent = (title) => {
  const component = createElement('div', 'timer-component');
  const timeContainer = createElement('div', `timer__counter-container`);
  const timeCounter = createElement('p', 'timer__counter', `timer__counter_${title}`);
  const timeTypeContainer = createElement('div', 'timer__time-type');
  const timeTypeText = createElement('p', 'timer__time-text', 'section-text_white');
  timeTypeText.classList.add(`timer__time-text_${title}`);

  timeTypeText.textContent = title;

  component.append(timeContainer);
  timeContainer.append(timeCounter);

  component.append(timeTypeContainer);
  timeTypeContainer.append(timeTypeText);
  return component;
};

export default createTimerComponent;

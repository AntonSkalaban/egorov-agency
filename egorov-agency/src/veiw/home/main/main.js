import createElement from '../../helpers/element';
import createTimer from './timer/timer';
import './style.css';

const createMain = () => {
  const main = createElement('main', 'main');

  const mainTitileContainer = createElement('div', 'main__title-container');
  const mainTitle = createElement('h2', 'main__title', 'section-title');
  const mainSubTitle = createElement('h2', 'main__subtitle', 'section-text');

  const timer = createTimer();

  const mainButtonContainer = createElement('div', 'main__button-contaner');
  const mainButtonSubtitle = createElement('p', 'main__button-subtitle', 'section-text');
  const mainButton = createElement('a', 'main__button', 'button');
  const buttonTextContainer = createElement('div', 'button-text-container', 'section-text');
  const buttonText = createElement('p', 'section-text_white');
  const buttonArrow = createElement('p', 'arrow', 'section-text_white');

  mainTitle.textContent = 'under construction';
  mainSubTitle.textContent = "We're making lots of improvements and will be back soon";

  mainButtonSubtitle.textContent = 'Check our event page when you wait:';
  mainButton.href = 'https://www.figma.com/file/xDLZsaEwzfEcSJ5AYqhEwE/Test-Front-End-EA?node-id=4%3A60&t=uZqgb3KYCPO68Fin-0'
  buttonText.textContent = 'Go to the event';
  buttonArrow.textContent = '--->';

  main.append(mainTitileContainer);
  mainTitileContainer.append(mainTitle);
  mainTitileContainer.append(mainSubTitle);

  main.append(timer);

  main.append(mainButtonContainer);
  mainButtonContainer.append(mainButtonSubtitle);
  mainButtonContainer.append(mainButton);
  mainButton.append(buttonTextContainer);
  buttonTextContainer.append(buttonText);
  buttonTextContainer.append(buttonArrow);

  return main;
};

export default createMain;

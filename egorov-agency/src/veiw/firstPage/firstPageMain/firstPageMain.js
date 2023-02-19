import createElement from '../../helpers/element';
import createTimer from './pageTimer/pageTimer';
import './style.css';

const createFirstPageMain = () => {
  const main = createElement('div', 'first-page__main');

  const mainTitileContainer = createElement('div', 'main__title-container');
  const mainTitle = createElement('h2', 'main__title');
  const mainSubTitle = createElement('h2', 'main__subtitle', 'subtitle');

  const timer = createTimer();

  const mainLinkContainer = createElement('div', 'main__link-contaner');
  const mainLinkSubtitle = createElement('p', 'main__link-subtitle', 'subtitle');
  const mainLink = createElement('button', 'main__button');

  const buttonTextContainer = createElement('div', 'button-text-container');
  const buttonText = createElement('p', 'subtitle', 'subtitle_white');
  const buttonArrow = createElement('p', 'subtitle', 'subtitle_white');
  buttonArrow.classList.add('arrow');

  mainTitle.textContent = 'under construction';
  mainSubTitle.textContent = "We're making lots of improvements and will be back soon";

  mainLinkSubtitle.textContent = 'Check our event page when you wait:';
  buttonText.textContent = 'Go to the event';
  buttonArrow.textContent = '-->';

  main.append(mainTitileContainer);
  mainTitileContainer.append(mainTitle);
  mainTitileContainer.append(mainSubTitle);

  main.append(timer);

  main.append(mainLinkContainer);
  mainLinkContainer.append(mainLinkSubtitle);
  mainLinkContainer.append(mainLink);
  mainLink.append(buttonTextContainer);
  buttonTextContainer.append(buttonText);
  buttonTextContainer.append(buttonArrow);

  return main;
};

export default createFirstPageMain;

import createElement from '../../helpers/element';
import showEvent from './showEvent';
const createEventCard = (number, title, date, imgUrl) => {
  const eventCard = createElement('div', 'event__card');
  const eventKey = createElement('div', 'event__key');
  const eventTitleNumber = createElement('p', 'event__title-number');
  const eventTitle = createElement('p', 'event__title');

  const eventBody = createElement('div', 'event__body');

  const eventSidebar = createElement('div', 'event__side-bar');
  const eventBigNumber = createElement('p', 'event__big-number');
  const eventInfoBlock = createElement('div', 'event__info-block');
  const eventInfoTitle = createElement('div', 'event__info-title');
  const eventInfoDate = createElement('div', 'event__info-date');
  const eventInfoBtn = createElement('a', 'event__info-btn');

  eventTitleNumber.textContent = number < 10 ? `0${number}` : number;
  eventTitle.textContent = title;

  eventKey.dataset.id = number - 1;

  eventKey.style.background =
    number === 1
      ? '#162C4E'
      : `linear-gradient(180deg, rgba(22, 44, 78, 0) 0%, #162C4E 100%), url(${imgUrl})`;

  eventBody.style.backgroundImage = `url(${imgUrl})`;
  eventBigNumber.textContent = number < 10 ? `0${number}` : number;
  eventInfoTitle.textContent = title;
  eventInfoDate.textContent = date;
  eventInfoBtn.textContent = 'More information';
  eventInfoBtn.href = 'https://rs.school/';

  if (number === 1) eventBody.classList.add('event__body_active');

  eventCard.append(eventKey);
  eventKey.append(eventTitleNumber);
  eventKey.append(eventTitle);

  eventCard.append(eventBody);
  eventBody.append(eventSidebar);
  eventSidebar.append(eventBigNumber);
  eventSidebar.append(eventInfoBlock);
  eventInfoBlock.append(eventInfoTitle);
  eventInfoBlock.append(eventInfoDate);
  eventInfoBlock.append(eventInfoBtn);

  eventKey.addEventListener('click', (e) => showEvent(e));

  return eventCard;
};

export default createEventCard;

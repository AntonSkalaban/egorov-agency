const showEvent = (e) => {
  const newKey = e.currentTarget;

  const eventsBody = document.querySelectorAll('.event__body');
  const eventsKeys = document.querySelectorAll('.event__key');

  for (let i = 0; i < eventsBody.length; i++) {

    if (eventsBody[i].classList.contains('event__body_active')) {
      eventsBody[i].classList.remove('event__body_active');
      eventsBody[newKey.dataset.id].classList.add('event__body_active');
      eventsKeys[i].style.background = `linear-gradient(180deg, rgba(22, 44, 78, 0) 0%, #162C4E 100%), ${cardsBody[i].style.backgroundImage}`;
      newKey.style.background = '#162C4E';
      break;
    }
  
  }
};

export default showEvent;

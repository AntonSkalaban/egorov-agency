const showEvent = (e) => {
  const newKey = e.currentTarget;

  const eventsBody = document.querySelectorAll('.event__body');
  const eventsKeys = document.querySelectorAll('.event__key');

  for (let i = 0; i < eventsBody.length; i++) {

    if (eventsBody[i].classList.contains('event__body_active')) {
      eventsBody[i].classList.remove('event__body_active');
      eventsBody[newKey.dataset.id].classList.add('event__body_active');
      newKey.style.background = '#162C4E';
      eventsKeys[i].style.background = `linear-gradient(180deg, rgba(22, 44, 78, 0) 0%, #162C4E 100%), ${eventsBody[i].style.backgroundImage}`;
      break;
    }
  
  }
};

export default showEvent;

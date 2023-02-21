const showEvent = (e) => {
  const newKey = e.currentTarget;

  const cardsBody = document.querySelectorAll('.event__body');
  const cardsKeys = document.querySelectorAll('.event__key');

  for (let i = 0; i < cardsBody.length; i++) {

    if (cardsBody[i].style.display === 'flex') {
      cardsBody[i].style.display = 'none';
      cardsBody[newKey.dataset.id].style.display = 'flex';

      cardsKeys[i].style.background = `linear-gradient(180deg, rgba(22, 44, 78, 0) 0%, #162C4E 100%), ${cardsBody[i].style.backgroundImage}`;
      newKey.style.background = '#162C4E';
      break;
    }

  }
};

export default showEvent;

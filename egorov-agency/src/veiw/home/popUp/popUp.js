import { closePopUp } from './popUpView'
import createElement from '../../helpers/element';
import './style.css';

const createPopUp = () => {
  const popUp = createElement('div', 'pop-up');
  const title = createElement('h1', 'pop-up__title');
  const message = createElement('p', 'pop-up__text', 'section-text');
  const cross = createElement('p', 'pop-up__cross');
  const closeBtn = createElement('button', 'pop-up__button', 'section-text_white');

  cross.textContent = 'X';
  closeBtn.textContent = 'Close';

  popUp.append(cross);
  popUp.append(title);
  popUp.append(message);
  popUp.append(closeBtn);


  cross.addEventListener('click', closePopUp);
  closeBtn.addEventListener('click', closePopUp);

  return popUp;
};

export default createPopUp;

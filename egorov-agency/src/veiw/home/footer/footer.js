import subscribe from '../../../controller/emailController/emailController';
import showAllEvents from '../../allEvents/alleEventsView';
import createElement from '../../helpers/element';
import './style.css';

const createFooter = () => {
  const footer = createElement('footer', 'footer');
  const footerContainer = createElement('div', 'footer__container');
  const emailForm = createElement('div', 'footer__email-form');
  const emailInputContainer = createElement('div', 'footer__input-container');
  const emailInput = createElement('input', 'footer__email');
  const emailCircle = createElement('div', 'footer__email-circle', 'button');
  emailCircle.classList.add('arrow', 'section-text_white');
  const emailError = createElement('p', 'footer___email__error');

  const eventsLink = createElement('p', 'footer__events-link', 'section-text');
  eventsLink.classList.add('button');
  const eventsLinkText = createElement('p', 'section-text_white');
  const eventsLinkArrow = createElement('p', 'section-text_white', 'arrow');
  eventsLinkArrow.classList.add('arrow_down');

  emailInput.type = 'email';
  emailError.style.display = 'none';

  emailInput.placeholder = 'Enter your Email and get notified';
  emailCircle.textContent = '--->';
  emailError.textContent = 'Email not valid.';
  eventsLinkText.textContent = 'Other Events';
  eventsLinkArrow.textContent = '--->';

  footer.append(footerContainer);
  footerContainer.append(emailForm);
  emailInputContainer;
  emailForm.append(emailInputContainer);
  emailInputContainer.append(emailInput);
  emailInputContainer.append(emailCircle);
  emailInputContainer.append(emailError);

  footerContainer.append(eventsLink);
  eventsLink.append(eventsLinkText);
  eventsLink.append(eventsLinkArrow);

  emailCircle.addEventListener('click', subscribe);
  eventsLink.addEventListener('click', showAllEvents);

  return footer;
};

export default createFooter;

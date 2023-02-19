import { showPopUp } from '../../../controller/popUpController.js/popUpController';
import createElement from '../../helpers/element';
import './style.css';

const createFirstPageFooter = () => {
  const footer = createElement('div', 'first-page__footer');
  const emailForm = createElement('div', 'first-page__email-form');
  const emailInput = createElement('input', 'first-page__email');
  const emailCircle = createElement('div', 'first-page__email-circle', 'subtitle_white');
  emailCircle.classList.add('arrow');
  const emailError = createElement('p', 'first-page___email__error');

  const eventsLink = createElement('p', 'first-page__events-link');
  const eventsLinkText = createElement('p', 'subtitle_white');
  const eventsLinkArrow = createElement('p', 'subtitle_white', 'arrow');

  emailInput.type = 'email';
  emailError.style.display = 'none';

  emailInput.placeholder = 'Enter your Email and get notified';
  emailCircle.textContent = '-->';
  emailError.textContent = 'Email not valid.';
  eventsLinkText.textContent = 'Other Events';
  eventsLinkArrow.textContent = '-->';

  const showError = (input, error) => {
    input.classList.add('first-page__email_invalid');
    error.style.display = 'block';
    console.log(error.style.display);
  };

  const hideError = (input, error) => {
    input.classList.remove('first-page__email_invalid');
    error.style.display = 'none';
  };

  const sendEmail = () => {
    const email = document.querySelector('.first-page__email');
    const error = document.querySelector('.first-page___email__error');
    const re =
      /^[-a-z0-9!#$%&'*+/=?^_`{|}~]+(\.[-a-z0-9!#$%&'*+/=?^_`{|}~]+)*@([a-z0-9]([-a-z0-9]{0,61}[a-z0-9])?\.)*(aero|arpa|asia|biz|cat|com|coop|edu|gov|info|int|jobs|mil|mobi|museum|name|net|org|pro|tel|travel|[a-z][a-z])$/;

    if (email.value.match(re)) {
      showPopUp();
      if (error.style.display === 'block') hideError(email, error);
    } else {
      if (error.style.display === 'none') showError(email, error);
    }
  };

  emailCircle.addEventListener('click', sendEmail);

  footer.append(emailForm);
  emailForm.append(emailInput);
  emailForm.append(emailCircle);
  emailForm.append(emailError);

  footer.append(eventsLink);
  eventsLink.append(eventsLinkText);
  eventsLink.append(eventsLinkArrow);

  return footer;
};

export default createFirstPageFooter;

import { hideError, showError } from "../../veiw/home/footer/errorsView";
import { showPopUp } from "../../veiw/home/popUp/popUpView";
import { createUser } from "../subscribeController.js/subscribeController";

const subscribe = async () => {
  const email = document.querySelector('.footer__email');
  const error = document.querySelector('.footer___email__error');
  const re =
    /^[-a-z0-9!#$%&'*+/=?^_`{|}~]+(\.[-a-z0-9!#$%&'*+/=?^_`{|}~]+)*@([a-z0-9]([-a-z0-9]{0,61}[a-z0-9])?\.)*(aero|arpa|asia|biz|cat|com|coop|edu|gov|info|int|jobs|mil|mobi|museum|name|net|org|pro|tel|travel|[a-z][a-z])$/;
  const userEmail = email.value;
  if (userEmail.match(re)) {
    const isOk = await createUser({ title: userEmail })
    showPopUp(isOk, userEmail);
    if (error.style.display === 'block') hideError(email, error);
  } else {
    if (error.style.display === 'none') showError(email, error);
  }
};

export default subscribe;
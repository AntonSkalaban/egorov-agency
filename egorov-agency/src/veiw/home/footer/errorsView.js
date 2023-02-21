export const showError = (input, error) => {
  input.classList.add('footer__email_invalid');
  error.style.display = 'block';
  console.log(error.style.display);
};

export const hideError = (input, error) => {
  input.classList.remove('footer__email_invalid');
  error.style.display = 'none';
};

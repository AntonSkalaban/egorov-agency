export const closePopUp = () => {
  document.querySelector('.page-cover').style.display = 'none';
  document.querySelector('.pop-up').style.display = 'none';
};

export const showPopUp = (status, email) => {
  document.querySelector('.page-cover').style.display = 'block';
  document.querySelector('.pop-up').style.display = 'flex';
  document.querySelector('.pop-up__title').textContent = status ? 'success!' : 'ooops...';
  document.querySelector('.pop-up__text').textContent = status
    ? `You have successfully subscribed to the email newsletter. Check your email ${email}`
    : 'Something went wrong:(';
};

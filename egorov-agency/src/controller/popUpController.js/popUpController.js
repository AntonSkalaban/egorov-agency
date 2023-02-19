export const closePopUp = () => {
  document.querySelector('.page-cover').style.display = 'none';
  document.querySelector('.pop-up').style.display = 'none';
};

export const showPopUp = () => {
  document.querySelector('.page-cover').style.display = 'block';
  document.querySelector('.pop-up').style.display = 'block';
};

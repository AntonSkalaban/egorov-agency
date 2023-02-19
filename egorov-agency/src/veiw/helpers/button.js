import createElement from './element';

const createButton = (className, commonClassName, title) => {
  const btn = createElement('button', className, commonClassName);
  btn.textContent = title;
  return btn;
};

export default createButton;
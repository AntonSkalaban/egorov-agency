const createElement = (tag, className, commonClassName) => {
  const el = document.createElement(tag);
  el.classList.add(className);
  if (commonClassName) el.classList.add(commonClassName);
  return el;
};

export default createElement;
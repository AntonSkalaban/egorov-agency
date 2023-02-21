import { createLeftPageConstruction, createRightPageConstruction } from './pageConstructions/pageConstructions';
import createElement from '../helpers/element';
import createHeader from './header/header';
import createMain from './main/main';
import createFooter from './footer/footer';
import createPopUp from './popUp/popUp';

const createHome = () => {
  const home = createElement('section', 'home', 'section');
  const container = createElement('div', 'container');
  const leftDecor = createLeftPageConstruction();
  const rightDecor = createRightPageConstruction();
  const header = createHeader();
  const main = createMain();
  const footer = createFooter();
  const popUp = createPopUp();

  home.append(container);
  home.append(leftDecor);
  home.append(rightDecor);
  container.append(header);
  container.append(main);
  container.append(footer);
  container.append(popUp);

  return home;
};

export default createHome;

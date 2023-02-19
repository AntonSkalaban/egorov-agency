import createElement from '../helpers/element';
import createFirstPageHeader from './firstPageHeader/firstPageHeader';
import createFirstPageMain from '../firstPage/firstPageMain/firstPageMain';
import {
  createLeftPageConstruction,
  createRightPageConstruction,
} from './pageConstructions/pageConstructions';
import './style.css';
import createFirstPageFooter from './firstPageFooter/firstPageFooter';
import createPopUp from './pagePopUp/popUp';

const createFirstPage = () => {
  const page = createElement('section', 'first-page');
  const leftConstruction = createLeftPageConstruction();
  const rightConstruction = createRightPageConstruction();
  const header = createFirstPageHeader();
  const main = createFirstPageMain();
  const footer = createFirstPageFooter();
  const popUp = createPopUp();


  page.append(leftConstruction);
  page.append(rightConstruction);
  page.append(header);
  page.append(main);
  page.append(footer);
  page.append(popUp);

  return page;
};

export default createFirstPage;

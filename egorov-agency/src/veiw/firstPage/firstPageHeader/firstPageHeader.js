import createElement from '../../helpers/element';
import logoSvg from '../../../assets/svg/logo.svg'
import './style.css'

const createFirstPageHeader = () => {
  const pageHeader = createElement('div', 'first-page__header');
 
  const headerLogoContainer = createElement('div', 'header__logo-container');
  const headerLogo = createElement('img', 'header__logo');
 
  const headerTitleContainer = createElement('div', 'header__title-container');
  const headerTitle = createElement('h1', 'heaeder__title');
  const headerSubTitle = createElement('p', 'header__subtitle');
  
  headerLogo.src = logoSvg;
  headerTitle.textContent = 'lead';
  headerSubTitle.textContent = 'advisors';

  
  pageHeader.append(headerLogoContainer);
  headerLogoContainer.append(headerLogo);

  pageHeader.append(headerTitleContainer);
  headerTitleContainer.append(headerTitle);
  headerTitleContainer.append(headerSubTitle);

  return pageHeader;
};

export default createFirstPageHeader;
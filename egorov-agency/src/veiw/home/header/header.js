import createElement from '../../helpers/element';
import logoSvg from '../../../assets/svg/logo.svg'
import './style.css'

const createHeader = () => {
  const header = createElement('header', 'header');
 
  const linkContainer = createElement('a', 'header__link');
  const headerLogoContainer = createElement('div', 'header__logo-container');
  const headerLogo = createElement('img', 'header__logo');
 
  const headerTitleContainer = createElement('div', 'header__title-container');
  const headerTitle = createElement('h1', 'header__title');
  const headerSubTitle = createElement('p', 'header__subtitle');
  
  linkContainer.href = 'https://egorovagency.by/#main';
  headerLogo.src = logoSvg;
  headerTitle.textContent = 'lead';
  headerSubTitle.textContent = 'advisors';

  header.append(linkContainer);
  linkContainer.append(headerLogoContainer);
  headerLogoContainer.append(headerLogo);

  header.append(headerTitleContainer);
  headerTitleContainer.append(headerTitle);
  headerTitleContainer.append(headerSubTitle);

  return header;
};

export default createHeader;
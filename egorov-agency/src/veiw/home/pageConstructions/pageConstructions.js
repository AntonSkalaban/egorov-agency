import leftConstructionSvg from '../../../assets/svg/leftConstruction.svg';
import rightConstructionSvg from '../../../assets/svg/rightConstruction.svg';
import createElement from '../../helpers/element';

import './style.css';

export const createLeftPageConstruction = () => {
  const construction = createElement('img', 'left-construction');
  construction.src = leftConstructionSvg;
  return construction;
};

export const createRightPageConstruction = () => {
  const construction = createElement('img', 'right-construction');
  construction.src = rightConstructionSvg;
  return construction;
};

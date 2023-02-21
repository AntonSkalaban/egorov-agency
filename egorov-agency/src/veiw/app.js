//import {createLeftPageConstruction, createRightPageConstruction } from './pageConstructions/pageConstructions'
import createHome from './home/home';
import createAllEvents from './allEvents/allEvents';
import createElement from './helpers/element';

const createApp = () => {
  const app = createElement('div', 'app');
  const pageCover = createElement('div', 'page-cover')
  const home = createHome();
  const allEvents = createAllEvents()

  app.append(home);
  app.append(allEvents);
  app.append(pageCover);

  return app;
};

export default createApp;

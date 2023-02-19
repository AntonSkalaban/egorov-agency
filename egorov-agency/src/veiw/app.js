import createFirstPage from './firstPage/firstPage';
import createElement from './helpers/element';

const createApp = () => {
  const app = createElement('div', 'app');
  const container = createElement('div', 'container');
  const pageCover = createElement('div', 'page-cover')
  const firstPage = createFirstPage();

  app.append(container);
  container.append(firstPage);
  container.append(pageCover);


  return app;
};

export default createApp;

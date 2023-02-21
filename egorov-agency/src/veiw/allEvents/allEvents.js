import createElement from '../helpers/element';
import createEventsContainer from './events/events';
import './style.css';

const createAllEvents = () => {
  const section = createElement('section', 'all-events', 'section');
  const container = createElement('div', 'container');
  const allEventsTitle = createElement('h2', 'all-events__title', 'section-title');
  const eventContainer = createEventsContainer();

  allEventsTitle.textContent = 'all events';

  section.append(container);
  container.append(allEventsTitle);
  container.append(eventContainer);
  return section;
};

export default createAllEvents;

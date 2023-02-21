import createElement from '../../helpers/element';
import { eventsData } from '../../../model/eventsData';
import createEventCard from './eventCard';
import './style.css'

const createEventsContainer = () => {
  const eventsContainer = createElement('div', 'events-container');
  eventsData.forEach((event, index) => {
    const eventCard = createEventCard(index + 1, event.title, event.date, event.img);
    eventsContainer.append(eventCard);
  });

  return eventsContainer;
};

export default createEventsContainer;

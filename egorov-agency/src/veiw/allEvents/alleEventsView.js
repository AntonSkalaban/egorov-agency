const showAllEvents = () => {
  const allEvents = document.querySelector('.all-events');
  allEvents.style.display = 'block';
  allEvents.scrollIntoView({ block: 'start', behavior: 'smooth' });
};

export default showAllEvents;
import EventsData from './static/data/events.json';
import eventsStyles from './static/styles/events-page.css';

export default function() {
  const content = document.querySelector('#content');
  content.innerText = '';
  content.classList = '';
  content.classList.add('events');

  const eventPageHeading = document.createElement('h1');
  eventPageHeading.textContent = 'Experience our strong and vivid community';
  content.appendChild(eventPageHeading);
  
  for (let eventObject of EventsData['events']) {
    const eventDiv = document.createElement('div');
    eventDiv.classList.add('event');

    const [eventHeading, eventPara] = [document.createElement('h3'), document.createElement('p')];
    eventHeading.textContent = eventObject['headline'];
    eventPara.textContent = eventObject['description'];

    eventDiv.appendChild(eventHeading);
    eventDiv.appendChild(eventPara);

    content.appendChild(eventDiv);
  }
}
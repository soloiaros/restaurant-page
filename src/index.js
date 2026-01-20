import createHomepageLayout from './homepage.js';
import createMenuLayout from './menu.js';
import createEventsLayout from './events-page.js';
import './static/styles/base.css';

const headerButtons = document.querySelector('header nav');

headerButtons.querySelector('#homepage-btn').addEventListener(
  'click', () => createHomepageLayout(),
);

headerButtons.querySelector('#menu-btn').addEventListener(
  'click', () => createMenuLayout(),
);

headerButtons.querySelector('#events-btn').addEventListener(
  'click', () => createEventsLayout(),
)

createHomepageLayout();
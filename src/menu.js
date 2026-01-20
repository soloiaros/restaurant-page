import MenuDataParsed from './static/data/menu.json'
import './static/styles/menu.css'

export default function() {

  const content = document.querySelector('#content');
  content.innerText = '';
  content.classList = '';
  content.classList.add('menu')

  const pageHeading = document.createElement('h1');
  pageHeading.textContent = 'Enjoy our wide selection of yummies 😋';

  const tableMenu = document.createElement('table');
  for (let menuSection of Object.keys(MenuDataParsed)) {
    const [headingRow, headingCell] = [document.createElement('th'), document.createElement('td')];
    headingCell.textContent = menuSection;
    headingRow.setAttribute('colspan', 2);
    headingRow.appendChild(headingCell);
    tableMenu.appendChild(headingRow);
    for (let menuItem of MenuDataParsed[menuSection]) {
      const [itemRow, itemNameCell, itemDescriptionCell] = [document.createElement('tr'), document.createElement('td'), document.createElement('td')];
      [itemNameCell.textContent, itemDescriptionCell.textContent] = [menuItem['name'], menuItem['description']];
      itemRow.appendChild(itemNameCell);
      itemRow.appendChild(itemDescriptionCell);
      tableMenu.appendChild(itemRow);
    }
  }

  content.appendChild(pageHeading);
  content.appendChild(tableMenu);
}
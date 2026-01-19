import Image1 from './images/mug-2.svg'
import Image2 from './images/mug-3.svg'

export default function() {
  const content = document.querySelector('#content');

  const createGenericParagraph = () => {
    let genericParaElement = document.createElement('p');
    genericParaElement.textContent = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde tempora enim culpa quisquam commodi animi? Mollitia perferendis id maxime voluptate, nisi perspiciatis eum veniam autem pariatur enim ipsam quos saepe!Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde tempora enim culpa quisquam commodi animi? ';
    return genericParaElement;
  }


  const [textColumn, imageColumn, imageContainer1, imageContainer2] = [document.createElement('div'), document.createElement('div'), document.createElement('div'), document.createElement('div')];
  textColumn.classList.add('text-column');
  imageColumn.classList.add('image-column');

  const textColumnHeader = document.createElement('h1')
  textColumnHeader.textContent = 'Making your mornings unforgettable';
  textColumn.appendChild(textColumnHeader);
  textColumn.appendChild(createGenericParagraph());

  imageContainer1.classList.add('image-container');
  imageContainer2.classList.add('image-container');
  const imageElement1 = new Image();
  const imageElement2 = new Image();
  imageElement1.src = Image1;
  imageElement2.src = Image2;
  imageContainer1.appendChild(imageElement1);
  imageContainer1.appendChild(createGenericParagraph());
  imageContainer2.appendChild(createGenericParagraph());
  imageContainer2.appendChild(imageElement2);

  imageColumn.appendChild(imageContainer1);
  imageColumn.appendChild(imageContainer2);

  content.appendChild(textColumn);
  content.appendChild(imageColumn);

  const footer = document.querySelector('footer')
  const [footerLinksList, footerText, footerYear] = [document.createElement('ul'), document.createElement('h4'), document.createElement('p')];
  const footerLinks = [
    document.createElement('li'),
    document.createElement('li'),
    document.createElement('li'),
  ];
  for (let i = 0; i < 3; i++) footerLinks[i].appendChild(document.createElement('a'));
  for (let i = 0; i < 3; i++) footerLinks[i].querySelector('a').textContent = ['Contacts', 'Gallery', 'Socials'][i];
  for (let footerLink of footerLinks) footerLinksList.appendChild(footerLink);
  footerText.textContent = "Mar-a-Mug'o";
  footerYear.textContent = '@2026';

  footer.appendChild(footerLinksList);
  footer.appendChild(footerText);
  footer.appendChild(footerYear);
}
import Image1 from './static/images/mug-3.svg'
import Image2 from './static/images/mug-2.svg'

export default function() {
  const content = document.querySelector('#content');

  const createParagraph = (text) => {
    let genericParaElement = document.createElement('p');
    genericParaElement.textContent = text;
    return genericParaElement;
  }


  const [textColumn, imageColumn, imageContainer1, imageContainer2] = [document.createElement('div'), document.createElement('div'), document.createElement('div'), document.createElement('div')];
  textColumn.classList.add('text-column');
  imageColumn.classList.add('image-column');

  const textColumnHeader = document.createElement('h1');
  textColumnHeader.textContent = 'Making your mornings unforgettable';
  textColumn.appendChild(textColumnHeader);
  textColumn.appendChild(createParagraph('Mar-a-Mug’o is a tongue-in-cheek coffee shop serving very important pours in a setting of excessive luxury and zero self-awareness. Expect over-the-top gold accents, dramatic branding, and coffee that’s “the best, maybe ever”—whether it is or not. Come for the espresso, stay for the satire, and leave feeling tremendously caffeinated. ☕😌'));

  imageContainer1.classList.add('image-container');
  imageContainer2.classList.add('image-container');
  const imageElement1 = new Image();
  const imageElement2 = new Image();
  imageElement1.src = Image1;
  imageElement2.src = Image2;
  imageContainer1.appendChild(imageElement1);
  imageContainer1.appendChild(createParagraph('Welcome to Mar-a-Mug’o, where coffee is brewed with tremendous confidence and absolutely no humility. Every cup is handcrafted, boldly branded, and served as if it just closed the biggest deal you’ve ever heard of. Gold-plated vibes optional, strong opinions included.'));
  imageContainer2.appendChild(createParagraph('From executive-level espresso shots to drip coffee that “people are saying” is the finest around, Mar-a-Mug’o delivers caffeine with unmatched bravado. Sip responsibly, pose dramatically, and remember: at Mar-a-Mug’o, it’s not just coffee—it’s a lifestyle.'));
  imageContainer2.appendChild(imageElement2);

  imageColumn.appendChild(imageContainer1);
  imageColumn.appendChild(imageContainer2);

  content.appendChild(textColumn);
  content.appendChild(imageColumn);
}
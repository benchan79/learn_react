'use strict';

import { animals } from './animals.js';

var title = '';

var showBackground = true;
var background = React.createElement('img', {
  className: 'background',
  alt: 'ocean',
  src: './images/ocean.jpg' });

var images = [];

for (var animal in animals) {
  images.push(React.createElement('img', {
    key: animal,
    className: 'animal',
    alt: animal,
    src: animals[animal].image,
    'aria-label': animal,
    role: 'button',
    onClick: displayFact
  }));
}

function displayFact(e) {
  var selectedAnimal = e.target.alt;
  var animalInfo = animals[selectedAnimal];
  var optionIndex = Math.floor(Math.random() * animalInfo.facts.length);

  var funFact = animalInfo.facts[optionIndex];
  document.getElementById('fact').innerHTML = funFact;
}

function AnimalFacts() {
  return React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      title || "Click an animal for a fun fact"
    ),
    showBackground && background,
    React.createElement(
      'div',
      { className: 'animals' },
      images
    ),
    React.createElement('p', { id: 'fact' })
  );
};

var rootNode = document.getElementById('root');
var root = ReactDOM.createRoot(rootNode);
root.render(React.createElement(AnimalFacts));
// root.render(<AnimalFacts />);

/* Warning: ReactDOM.render is no longer supported in React 18.
Use createRoot instead. Until you switch to the new API, 
your app will behave as if it's running React 17. 
Learn more: https://reactjs.org/link/switch-to-createroot

const animalFacts = (
  <div>
    <h1>{title || "Click an animal for a fun fact"}</h1>
    {showBackground && background}
    <div className="animals">{images}</div>
    <p id="fact"></p>
  </div>
);

ReactDOM.render(animalFacts, document.getElementById('root'))

*/
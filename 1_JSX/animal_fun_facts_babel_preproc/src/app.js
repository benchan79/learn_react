'use strict';

import { animals } from './animals.js';

const title = '';

const showBackground = true;
const background = (
  <img 
    className='background' 
    alt='ocean' 
    src="./images/ocean.jpg" />
);

const images = [];

for (const animal in animals) {
  images.push(
    <img
      key={animal}
      className='animal'
      alt={animal}
      src={animals[animal].image}
      aria-label={animal}
      role='button'
      onClick={displayFact}
    />
  )
}

function displayFact(e) {
  const selectedAnimal = e.target.alt;
  const animalInfo = animals[selectedAnimal];
  const optionIndex = Math.floor(Math.random() * animalInfo.facts.length);

  const funFact = animalInfo.facts[optionIndex];
  document.getElementById('fact').innerHTML = funFact;
}

function AnimalFacts() {
  return(
    <div>
      <h1>{title || "Click an animal for a fun fact"}</h1>
      {showBackground && background}
      <div className="animals">{images}</div>
      <p id="fact"></p>
    </div>
  )
};

const rootNode = document.getElementById('root');
const root = ReactDOM.createRoot(rootNode);
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
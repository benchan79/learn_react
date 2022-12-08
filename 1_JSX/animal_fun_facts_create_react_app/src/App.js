import { animals } from './animals';
import ocean from "./images/ocean.jpg";
import './styles.css'

const title = '';

const showBackground = true;

const background = (
  <img 
    className='background' 
    alt='ocean' 
    src={ocean} />
);

const images = [];

for (const animal in animals) {
  images.push(
    <img
      key={animal}
      className='animal'
      alt={animal}
      src={animals[animal].image}
      ariaLabel={animal}
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

// { title === '' ? 'Click an animal for a fun fact' : title }
function App() {
  return (
    <div>
      <h1>{title || "Click an animal for a fun fact"}</h1>
      {showBackground && background}
      <div className="animals">{images}</div>
      <p id="fact"></p>
    </div>
  );
}

export default App;

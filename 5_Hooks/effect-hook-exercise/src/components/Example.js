import React, {Component} from 'react';
import { useState, useEffect } from 'react';
import { get } from './mockBackendWeather/fetch';
import { getCat } from './mockBackendShop/fetch';


export class PageTitleClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ''
    };
  }

  componentDidMount() {
    document.title = this.state.name;
  }
  
  componentDidUpdate() {
    document.title = `Hi, ${this.state.name}`;
  }

  render() {
    return (
      <div>
        <p>Use the input field below to rename this page!</p>
        <input 
          onChange={({target}) => this.setState({ name: target.value })} 
          value={this.state.name} 
          type='text' />
      </div>
    );
  }
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 2. Function Component Effects
export function PageTitleFunction() {
  const [name, setName] = useState('');

 useEffect(() => {
    document.title = `Hi, ${name}`;
  }, [name]);
 
  return (
    <div>
      <p>Use the input field below to rename this page!</p>
      <input 
        onChange={({target}) => setName(target.value)} 
        value={name} 
        type='text' />
    </div>
  );
}

export function Counter() {
  const [count, setCount] = useState(0);

  // useEffect(() => {
  //   alert(`Count:`);
  // });

  const handleClick = () => {
    setCount((prevCount) =>  prevCount + 1);
  };

  console.log(count)

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={handleClick}>
        Click me
      </button>
    </div>
  );
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 3. Clean Up Effects

export function Counter2() {
  const [clickCount, setClickCount] = useState(0);

  useEffect(() => {
    document.addEventListener('mousedown', increment);
    return () => {
      document.removeEventListener('mousedown', increment);
    }
  })

  const increment = () => {
    setClickCount((prevCount) => prevCount + 1);
  };

  return (
      <h1>Document Clicks: {clickCount}</h1>
  );
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 4. Control When Effects Are Called
export function DependencyArray() {
  const [clickCount, setClickCount] = useState(0);
  const [name, setName] = useState('');

  // useEffect(() => {
  //   alert("component rendered for the first time");
  //   return () => {
  //     alert("component is being removed from the DOM")
  //   };
  // }, []);

  const handleClick = () => {
    setClickCount((prevCount) =>  prevCount + 1);
  };

  const handleChange = ({ target }) => {
    setName(target.value);
  }

  return (
    <>
      <p>You clicked {clickCount} times</p>
      <button onClick={handleClick}>
        Click me
      </button>
      <input 
        value={name}
        onChange={handleChange}
        type='text'
      />
    </>
  )
}

export function Timer() {
  const [time, setTime] = useState(0);
  const [name, setName] = useState('');

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime((prev) => prev + 1);
    }, 1000);
    return() => {
      clearInterval(intervalId);
    };
  }, []);

  const handleChange = ({ target }) => {
    setName(target.value);
  }

  return (
    <>
      <h1>Time: {time}</h1>
      <input 
        value={name}
        onChange={handleChange}
        type='text'
      />
    </>
  )
};
////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 4. Control When Effects Are Called
export function DependencyArray2() {
  const [clickCount, setClickCount] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${clickCount} times`;
  }, [clickCount]); // Only re-run the effect if the value stored by count changes

  const handleClick = () => {
    setClickCount((prevCount) =>  prevCount + 1);
  };

  return (
    <>
      <p>You clicked {clickCount} times</p>
      <button onClick={handleClick}>
        Click me
      </button>
    </>
  )
}

export function Forecast() {
  const [data, setData] = useState(null);
  const [notes, setNotes] = useState({});
  const [forecastType, setForecastType] = useState('/daily');

  useEffect(() => {
    // alert('Requested data from server...');
    get(forecastType).then((response) => {
      // alert('Response: ' + JSON.stringify(response,'',2));
      setData(response.data);
    });
  }, [forecastType]);

  const handleChange = (itemId) => ({ target }) =>
    setNotes((prev) => ({
      ...prev,
      [itemId]: target.value
    }));

  if (!data) {
    return <p>Loading...</p>;
  }

  return (
    <div className='App'>
      <h1>My Weather Planner</h1>
      <div>
        <button onClick={() => setForecastType('/daily')}>5-day</button>
        <button onClick={() => setForecastType('/hourly')}>Today</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Summary</th>
            <th>Avg Temp</th>
            <th>Precip</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => {
            return (
              <tr key={item.id}>
                <td>{item.summary}</td>
                <td> {item.temp.avg}°F</td>
                <td>{item.precip}%</td>
                <td>
                  <input
                    value={notes[item.id] || ''}
                    onChange={handleChange(item.id)}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 6. Rules of Hooks

export function Shop() {
  const [categories, setCategories] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [items, setItems] = useState({});

  useEffect(() => {
    getCat('/categories').then((response) => {
      setCategories(response.data);
    });
  }, []);

  useEffect(() => {
    if (selectedCategory && !items[selectedCategory]) {
      getCat(`/items?category=${selectedCategory}`).then((response) => {
        setItems((prev) => ({ ...prev, [selectedCategory]: response.data }));
      });
    }
  }, [selectedCategory, items]);

  if (!categories) {
    return <p>Loading..</p>;
  }

  return (
    <div className='App'>
      <h1>Clothes 'n Things</h1>
      <nav>
        {categories.map((category) => (
          <button key={category} onClick={() => setSelectedCategory(category)}>
            {category}
          </button>
        ))}
      </nav>
      <h2>{selectedCategory}</h2>
      <ul>
        {!items[selectedCategory]
          ? null
          : items[selectedCategory].map((item) => <li key={item}>{item}</li>)}
      </ul>
    </div>
  );
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 7. Separate Hooks for Separate Effects

// Handle both position and menuItems with one useEffect hook.
export function CombinedHooks() {
  const [data, setData] = useState({ position: { x: 0, y: 0 } });
  useEffect(() => {
    getCat('/categories').then((response) => {
      setData((prev) => ({ ...prev, menuItems: response.data }));
    });
    const handleMove = (event) =>
      setData((prev) => ({
        ...prev,
        position: { x: event.clientX, y: event.clientY }
      }));
    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, []);
  return (
    <>
      <h2>Combined Hooks</h2>
      <h3>x: {data.position.x}, y: {data.position.y}</h3>
      <h3>{data.menuItems}</h3>
    </>
  )
};

export function SeparateHooks() {
  // Handle menuItems with one useEffect hook.
  const [menuItems, setMenuItems] = useState(null);
  useEffect(() => {
    getCat("/categories").then((response) => setMenuItems(response.data));
  }, []);

  // Handle position with a separate useEffect hook.
  const [position, setPosition] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const handleMove = (event) =>
      setPosition({ x: event.clientX, y: event.clientY });
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <>
      <h2>Separate Hooks</h2>
      <h3>x: {position.x}, y: {position.y}</h3>
      <h3>{menuItems}</h3>
    </>
  )
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////


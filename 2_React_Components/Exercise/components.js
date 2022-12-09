// Components and Advanced JSX


// 1. Use Multiline JSX in a Component
// import React from 'react';
// import ReactDOM from 'react-dom';

class QuoteMaker extends React.Component {
  render() {
    return (
      <>
        <h1>1. Use Multiline JSX in a Component</h1>
        <blockquote>
          <p>
            The world is full of objects, more or less interesting; I do not wish to add any more.
          </p>
          <cite>
            <a target="_blank"
              href="https://en.wikipedia.org/wiki/Douglas_Huebler">
              Douglas Huebler
            </a>
          </cite>
        </blockquote>
      </>
    );
  }
};

ReactDOM.render(
  <QuoteMaker />,
  document.getElementById('app1-1')
);


class QuoteMaker2 extends React.Component {
  render() {
    return (
      <blockquote>
        <p>
          What is important now is to recover our senses.
        </p>
        <cite>
          <a target="_blank" href="https://en.wikipedia.org/wiki/Susan_Sontag">
          Susan Sontag
          </a>
        </cite>
      </blockquote>
    );
  }
};

ReactDOM.render(
  <QuoteMaker2 />,
  document.getElementById('app1-2')
);

/////////////////////////////////////////////////////////////////
// 2. Use a Variable Attribute in a Component
const redPanda = {
  src: 'https://upload.wikimedia.org/wikipedia/commons/b/b2/Endangered_Red_Panda.jpg',
  alt: 'Red Panda',
  width:  '200px'
};

class RedPanda extends React.Component {
  render() {
    return (
      <div>
        <h1>2. Use a Variable Attribute in a Component</h1>
        <h2>Cute Red Panda</h2>
        <img 
          src={redPanda.src}
          alt={redPanda.alt}
          width={redPanda.width} />
      </div>
    );
  }
}

ReactDOM.render(
  <RedPanda />,
  document.getElementById('app2-1')
);

const owl = {
  title: "Excellent Owl",
  src: "https://content.codecademy.com/courses/React/react_photo-owl.jpg",
};

class Owl extends React.Component {
  render() {
    return (
      <div>
        <h2>{owl.title}</h2>
        <img
          src={owl.src}
          alt={owl.title} />
      </div>
    )
  }
}

ReactDOM.render(
  <Owl />, 
  document.getElementById('app2-2')
);
/////////////////////////////////////////////////////////////////
// 3. Put Logic in a Render Function

class Random extends React.Component {
  render() {
    // First, some logic that must happen
    // before rendering:
    const n = Math.floor(Math.random() * 10 + 1);
    // Next, a return statement
    // using that logic:
    return (
      <>
        <h1> 3. Put Logic in a Render Function </h1>
        <h2>The number is {n}!</h2>
      </>
    );
  }
}
ReactDOM.render(
  <Random />, 
  document.getElementById('app3-1')
);

const friends = [
  {
    title: "Yummmmmmm",
    src: "https://content.codecademy.com/courses/React/react_photo-monkeyweirdo.jpg"
  },
  {
    title: "Hey Guys!  Wait Up!",
    src: "https://content.codecademy.com/courses/React/react_photo-earnestfrog.jpg"
  },
  {
    title: "Yikes",
    src: "https://content.codecademy.com/courses/React/react_photo-alpaca.jpg"
  }
];

class Friend extends React.Component {
  render() {
    const friend = friends[2];
    return (
      <div>
        <h1>{friend.title}</h1>
        <img src={friend.src}/>
      </div>
    )
  }
}

ReactDOM.render(
  <Friend />, 
  document.getElementById('app3-2')
);
/////////////////////////////////////////////////////////////////
// 4. Use a Conditional in a Render Function

let apocalypse = true;

class TodaysPlan extends React.Component {
  render() {
    let task;
    if (!apocalypse) {
      task = 'learn React.js'
    } else {
      task = 'run around'
    }

    return (
      <>
        <h1>4. Use a Conditional in a Render Function</h1>
        <h2>Today I am going to {task}!</h2>
      </>
    );
  }
}

ReactDOM.render(
	<TodaysPlan />,
	document.getElementById('app4-1')
);

const fiftyFifty = Math.random() < 0.5;

class TonightsPlan extends React.Component {
  render() {
    let task;
    if (fiftyFifty === true) {
      task = 'out';
    } else {
      task = 'to bed';
    }

    return (
      <h2>Tonight I'm going {task} WOOO</h2>
    );
  }
}

ReactDOM.render(
  <TonightsPlan />, 
  document.getElementById('app4-2')
)
/////////////////////////////////////////////////////////////////
// 5. Use this in a Component
class IceCreamGuy extends React.Component {
  get food() {
    return 'ice cream';
  }
 
  render() {
    return (
      <>
        <h1>5. Use `this` in a Component</h1>
        <h2>I like {this.food}.</h2>
      </>
    );
  }
}
ReactDOM.render(
  <IceCreamGuy />, 
  document.getElementById('app5-1')
)

class MyName extends React.Component {
  get name() {
    return 'John Doe'
  }

  render() {
    return <h2>My name is {this.name}.</h2>;
  }
}

ReactDOM.render(
  <MyName />, 
  document.getElementById('app5-2')
);
/////////////////////////////////////////////////////////////////
// 6. Use an Event Listener in a Component
class MyClass extends React.Component {
  myFunc() {
    alert('Stop it.  Stop hovering.');
  }
 
  render() {
    return (
      <>
        <p/>
        <div onMouseEnter={this.myFunc}>
          Do not Hover here.
        </div>
        <p></p>
       </> 
    );
  }
}
ReactDOM.render(
  <MyClass />, 
  document.getElementById('app6-2')
);

class Button extends React.Component {
  scream() {
    alert('AAAAAAAAHHH!!!!!');
  }

  render() {
    return (
      <>
        <h1>6. Use an Event Listener in a Component</h1>
        <button onClick={this.scream}>Do not click me.</button>
      </>
    );
  }
}

ReactDOM.render(
  <Button />,
  document.getElementById('app6-1')
);
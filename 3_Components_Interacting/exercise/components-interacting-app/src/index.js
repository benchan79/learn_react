import React from 'react';
import ReactDOM from 'react-dom/client';
import ReactDOM2 from 'react-dom';
import './index.css';
import { ProfilePage } from './ProfilePage';
import { faveManifestos, alsoRan } from './Manifestos';
import {Greeting} from './Greeting';
import { Welcome } from './Welcome';
import { Button } from './Button';
import { LilButton } from './LilButton';
import { List } from './List';
// import App from './App';

class OMG extends React.Component {
  render() {
    return <h1>Whooaa!</h1>;                                                
  }                                                     
}
 
class Crazy extends React.Component {
  render() {
    return <OMG />;
  }
}

const root1 = ReactDOM.createRoot(document.getElementById('root1'));
root1.render(
  <React.StrictMode>
    <Crazy />
  </React.StrictMode>
);
///////////////////////////////////////////////////////////////////////////

const root2 = ReactDOM.createRoot(document.getElementById('root2'));
root2.render(
  <React.StrictMode>
    <ProfilePage />
  </React.StrictMode>
);
///////////////////////////////////////////////////////////////////////////

console.log(`A Cyborg Manifesto:  ${faveManifestos.cyborg}`);
console.log(`Also Ran:  ${alsoRan}`);

class FaveManifestos extends React.Component {
  render() {
    return (
      <div>
        <p>A Cyborg Manifesto: {faveManifestos.cyborg} </p>
        <p>Also Ran: {alsoRan} </p>
      </div>
    );                                     
  }                                                     
}

const root3 = ReactDOM.createRoot(document.getElementById('root3'));
root3.render(
  <React.StrictMode>
       <FaveManifestos />
  </React.StrictMode>
);
///////////////////////////////////////////////////////////////////////////
class PropsDisplayer extends React.Component {
  render() {
    console.log("Props object comin' up!");
    console.log(this.props);
    const stringProps = JSON.stringify(this.props)
    console.log(this.props);
    console.log("That was my props object!");
    return (
      <div>
        <h1>CHECK OUT MY PROPS OBJECT</h1>
        <h2> {stringProps} </h2>
      </div>
    );
  }
}

ReactDOM2.render(
  <PropsDisplayer myProp="Hello" />, 
  document.getElementById('root4')
);
///////////////////////////////////////////////////////////////////////////

class Greet extends React.Component {
  render() {
    return <h1>Hi there, {this.props.firstName}!</h1>;
  }
}

ReactDOM2.render(
  <Greet firstName='Roberta' />, 
  document.getElementById('root5')
);
///////////////////////////////////////////////////////////////////////////

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>
          Hullo and, "Welcome to The Newzz," "On Line!"
        </h1>
        <Greeting name="John" signedIn={true} />
        <article>
          Latest newzz:  where is my phone?
        </article>
      </div>
    );
  }
}

ReactDOM2.render(
  <App />, 
  document.getElementById('root6')
);
///////////////////////////////////////////////////////////////////////////

class Home extends React.Component {
  render() {
    return <Welcome name='Ludwig van Beethoven' />;
  }
}

ReactDOM2.render(
  <Home />, 
  document.getElementById('root7')
);
///////////////////////////////////////////////////////////////////////////

class Example extends React.Component {
  handleEvent() {
    alert(`I am an event handler.
      If you see this message,
      then I have been called.`);
  }

  render() {
    return (
      <button onClick={this.handleEvent}>
        Event Handler Example: Click me
      </button>
    );
  }
}

ReactDOM2.render(
  <Example />, 
  document.getElementById('root8')
);

///////////////////////////////////////////////////////////////////////////

class Talker extends React.Component {
  handleClick() {
    let speech = '';
    for (let i = 0; i < 10000; i++) {
      speech += 'blah ';
    }
    alert(speech);
  }
  
  render() {
    return <Button onClick={this.handleClick} />;
  }
}

ReactDOM2.render(
  <Talker />,
  document.getElementById('root9')
);

///////////////////////////////////////////////////////////////////////////
class BigButton extends React.Component {
  render() {
    console.log(this.props.children);
    return <button>Yo I am big</button>;
  }
}

// Example 1
ReactDOM2.render(
  <BigButton>
    I am a child of BigButton.
  </BigButton>,
  document.getElementById('root10')
);
// Example 2
ReactDOM2.render(
  <BigButton>
    <LilButton />
  </BigButton>,
  document.getElementById('root11')
);
// Example 3
ReactDOM2.render(
  <BigButton test={123} />,
  document.getElementById('root12')
);
// Example 4
ReactDOM2.render(
  <BigButton>
    <p>1</p>
    <p>2</p>
    <p>3</p>
  </BigButton>,
  document.getElementById('root13')
);
///////////////////////////////////////////////////////////////////////////
class Musician extends React.Component {
  render () {
    return (
      <div>
        <List type='Living Musician'>
          <li>Sachiko M</li>
          <li>Harvey Sid Fisher</li>
        </List>
        <List type='Living Cat Musician'>
          <li>Nora the Piano Cat</li>
        </List>
        <ul>
          <li>one</li>
          <li>two</li>
        </ul>
      </div>
    );
  }
}

ReactDOM2.render(
  <Musician />,
  document.getElementById('root14')
)
///////////////////////////////////////////////////////////////////////////
class Button2 extends React.Component {
  render() {
    return (
      <button>
        {this.props.text}
      </button>
    );
  }
}

// defaultProps goes here:
Button2.defaultProps = {text: 'I am a button'}

ReactDOM2.render(
  <Button2 />, 
  document.getElementById('root15')
);

///////////////////////////////////////////////////////////////////////////
class ExampleMoodHungry extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      mood: 'decent',
      hungry: 'hungry' 
    };
    this.eat = this.eat.bind(this);
  }
  
  eat() {
    this.setState({ hungry: 'full' });
  }

  render() {

    return (
      <div>
        <h1>I'm feeling {this.state.mood}!</h1>
        Current State of {Object.keys(this.state)[0]} is {Object.values(this.state)[0]}
        <h1>I'm feeling {this.state.hungry}!</h1>
        <button onClick={this.eat}>Eat something</button>
      </div>
      
    );
  }
}

ReactDOM2.render(
  <ExampleMoodHungry />, 
  document.getElementById('root16')
);
///////////////////////////////////////////////////////////////////////////
class BestApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {title: 'Best App'}
  }
	
  render() {
    return (
      <h1>
        {this.state.title}
      </h1>
    );
  }
}

ReactDOM2.render(
  <BestApp />, 
  document.getElementById('root17')
);

///////////////////////////////////////////////////////////////////////////
class ExampleFog extends React.Component {
  constructor(props) {
    super(props);
    this.state = { weather: 'sunny' };
    this.makeSomeFog = this.makeSomeFog.bind(this);
  }
 
  makeSomeFog() {
    this.setState({
      weather: 'foggy'
    });
  }
  render() {

    return (
      <div>
        <h1>Today is {this.state.weather}!</h1>
        <button onClick={this.makeSomeFog}>Make some fog!</button>
      </div>
    );
  }
}

ReactDOM2.render(
  <ExampleFog />, 
  document.getElementById('root18')
);
///////////////////////////////////////////////////////////////////////////
class Mood extends React.Component {
  constructor(props) {
    super(props);
    this.state = { mood: 'good' };
    this.toggleMood = this.toggleMood.bind(this);
  }

  toggleMood() {
    const newMood = this.state.mood === 'good' ? 'bad' : 'good';
    this.setState({ mood: newMood });
  }

  render() {
    return (
      <div>
        <h1>I'm feeling {this.state.mood}!</h1>
        <button onClick={this.toggleMood}>
          Click Me
        </button>
      </div>
    );
  }
}

ReactDOM2.render(
  <Mood />, 
  document.getElementById('root19')
);
///////////////////////////////////////////////////////////////////////////
const green = '#39D1B4';
const yellow = '#FFD712';

class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { color: green }
    this.changeColor = this.changeColor.bind(this);
  }

  changeColor() {
    const newColor = this.state.color === green ? yellow : green;
    this.setState({color: newColor});
  }

  render() {
    return (
      <div style={{background: this.state.color}}>
        <h1>
          Change my color
        </h1>
        <button onClick={this.changeColor}>
          Change color
        </button>
      </div>
    );
  }
}

ReactDOM2.render(
  <Toggle />,
  document.getElementById('root20')
);

// const root4 = ReactDOM.createRoot(document.getElementById('root4'));
// root4.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
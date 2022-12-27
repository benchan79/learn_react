# Container Components From Presentational Components

## 1. Separate Container Components From Presentational Components
This is a programming pattern that will help organize the React code.

As you continue building your React application, you will soon realize that one component has too many responsibilities, but how do you know when you have reached that point?

Separating container components from presentational components helps to answer that question. It shows you when it might be a good time to divide a component into smaller components. It also shows you how to perform that division.

`<GuineaPigs />`‘s job is to render a photo carousel of guinea pigs. It does this perfectly well! And yet, it has a problem: it does too much stuff.
```
import React from 'react';
import ReactDOM from 'react-dom';

const GUINEAPATHS = [
  'https://content.codecademy.com/courses/React/react_photo-guineapig-1.jpg',
  'https://content.codecademy.com/courses/React/react_photo-guineapig-2.jpg',
  'https://content.codecademy.com/courses/React/react_photo-guineapig-3.jpg',
  'https://content.codecademy.com/courses/React/react_photo-guineapig-4.jpg'
];

export class GuineaPigs extends React.Component {
  constructor(props) {
    super(props);

    this.state = { currentGP: 0 };

    this.interval = null;

    this.nextGP = this.nextGP.bind(this);
  }

  nextGP() {
    let current = this.state.currentGP;
    let next = ++current % GUINEAPATHS.length;
    this.setState({ currentGP: next });
  }

  componentDidMount() {
    this.interval = setInterval(this.nextGP, 5000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    let src = GUINEAPATHS[this.state.currentGP];
    return (
      <div>
        <h1>Cute Guinea Pigs</h1>
        <img src={src} />
      </div>
    );
  }
}

ReactDOM.render(
  <GuineaPigs />, 
  document.getElementById('app')
);
```

## 2. Create Container Component
Separating container components from presentational components is a popular React programming pattern. It is a special application of the concepts learned in the Stateless Components From Stateful Components module.

If a component has to have state, make calculations based on props, or manage any other complex logic, then that component shouldn’t also have to render HTML-like JSX.

The functional part of a component (state, calculations, etc.) can be separated into a container component.

## 3. Separate Presentational Component
The presentational component’s only job is to contain HTML-like JSX. It should be an exported component and will not render itself because a presentational component will always get rendered by a container component.

As a separate example, say we have Presentational and Container components. **Presentational.js** must export the component class (or function, when applicable):
```
export class Presentational extends Component {
```

**Container.js** must import that component:
```
import { Presentational } from 'Presentational.js';
```

## 4. Render Presentational Component in Container Component
The container component should now render the presentational component instead of rendering JSX.
```
// GuineaPigsContainer.js
...
  render() {
    const src = GUINEAPATHS[this.state.currentGP];
    return <GuineaPigs src={src}/>;
  }
```

## 5. Remove Logic from Presentational Component
The last step to separating the container component from the presentational component is to remove redundant logic in the presentational component. The presentational component should be left with the render function that contains JSX statements.

## 6. Review
1. Identified that the original component needed to be refactored: it was handling both calculations/logic and presentation/rendering
2. Copied the original component to a new containers/ folder and renamed it GuineaPigsContainer
3. Removed all of the presentation/rendering code from the container component
4. Removed all of the calculation/logic code from the presentational component
5. Accessed the presentational component from within the container using import and export
6. Edited the container’s render() method to render the presentational component with the proper props

In this programming pattern, the container component does the work of figuring out what to display. The presentational component does the work of actually displaying it. If a component does a significant amount of work in both areas, then that’s a sign that you should use this pattern.

Here are some more articles to read:

[Container Components](https://medium.com/@learnreact/container-components-c0e67432e005)
[Presentational and Container Components](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0)
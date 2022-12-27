# propTypes

## 1. propTypes
`propTypes` are useful for two reasons. The first reason is prop validation.

Validation can ensure that your `props` are doing what they’re supposed to be doing. If `props` are missing, or if they’re present but they aren’t what you’re expecting, then a warning will print in the console.

This is useful, but reason #2 is arguably more useful: documentation.

Documenting `props` makes it easier to glance at a file and quickly understand the component class inside. When you have a lot of files, and you will, this can be a huge benefit.

## 2. Apply PropTypes
In the code editor, take a look at `MessageDisplayer`‘s render function.
```
import React from 'react';
import PropTypes from 'prop-types';

export class MessageDisplayer extends React.Component {
  render() {
    return <h1>{this.props.message}</h1>;
  }
}

// This propTypes object should have
// one property for each expected prop:
MessageDisplayer.propTypes = {
  message: PropTypes.string
};
```
Notice the expression `this.props.message`. From this expression, you can deduce that `MessageDisplayer` expects to get passed a `prop` named `message`. Somewhere, at some time, this code is expected to execute:
```
<MessageDisplayer message="something" />
```

If a component class expects a `prop`, then you can use `propTypes` for that component class!

In order to start using `propTypes`, we need to import the `'prop-types'` library.
```
import PropTypes from 'prop-types';
```
Then, you can declare `propTypes` as a static property for your component after the component has been defined. See the example of a `propTypes` property on lines 11-13. Notice that the value of `propTypes` is an object, not a function!

The second step is to add properties to the `propTypes` object. For each `prop` that your component class expects to receive, there can be one property on your `propTypes` object.

`MessageDisplayer` only expects one `prop`: `message`. Therefore, its `propTypes` object only has one property.

## 3. Add Properties to PropTypes
In the code editor, look at the property on `MessageDisplayer`‘s `propTypes` object:
```
import React from 'react';
import PropTypes from 'prop-types';

export class MessageDisplayer extends React.Component {
  render() {
    return <h1>{this.props.message}</h1>;
  }
}

// This propTypes object should have
// one property for each expected prop:
MessageDisplayer.propTypes = {
  message: PropTypes.string
};
```
What are the properties on `propTypes` supposed to be, exactly?

The name of each property in `propTypes` should be the name of an expected `prop`. In our case, `MessageDisplayer` expects a `prop` named `message`, so our property’s name is `message`.

The value of each property in `propTypes` should fit this pattern:
```
PropTypes.expected_data_type_goes_here
```

Since `message` is presumably going to be a string, we chose `PropTypes.string`. You can see this on line 13. Notice the difference in capitalization between the `propTypes` object and `PropTypes`!

Each property on the `propTypes` object is called a `propType`.

Select the next file in the code editor, **Runner.js**. 

`Runner` has six `propTypes`! Look at each one. Note that `bool` and `func` are abbreviated, but all other data types are spelled normally.

If you add `.isRequired` to a `propType`, then you will get a console warning if that `prop` isn’t sent.
```
import React from 'react';
import PropTypes from 'prop-types';

export class Runner extends React.Component {
  render() {
  	let miles = this.props.miles;
    let km = this.props.milesToKM(miles);
    let races = this.props.races.map(function(race, i){
      return <li key={race + i}>{race}</li>;
    });

    return (
      <div style={this.props.style}>
        <h1>{this.props.message}</h1>
        { this.props.isMetric && 
          <h2>One Time I Ran {km} Kilometers!</h2> }
        { !this.props.isMetric && 
          <h2>One Time I Ran {miles} Miles!</h2> }
        <h3>Races I've Run</h3>
        <ul id="races">{races}</ul>
      </div>
    );
  }
}

Runner.propTypes = {
  message:   PropTypes.string.isRequired,
  style:     PropTypes.object.isRequired,
  isMetric:  PropTypes.bool.isRequired,
  miles:     PropTypes.number.isRequired,
  milesToKM: PropTypes.func.isRequired,
  races:     PropTypes.array.isRequired
};
```

## 4. PropTypes in Function Components
To write `propTypes` for a function component, you define a `propTypes` object as a property of the function component itself. Here’s what that looks like:
```
const Example = (props) => {
  return <h1>{props.message}</h1>;
}
 
Example.propTypes = {
  message: PropTypes.string.isRequired
};
```
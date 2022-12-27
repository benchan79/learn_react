# Style

## 1. Advanced React Techniques
These are other techniques on how to make a propType, how to write a form, and how to use styles.

A second programming pattern will be dividing components into presentational components and container components.

## 2. Inline styles
An inline style is a style that’s written as an attribute, like this:
```
<h1 style={{ color: 'red' }}>Hello world</h1>
```

Notice the double curly braces.

The outer curly braces inject JavaScript into JSX. They say, “everything between us should be read as JavaScript, not JSX.”

The inner curly braces create a JavaScript object literal. They make this a valid JavaScript object:
```
{ color: 'red' }
```

If you inject an object literal into JSX, and your entire injection is only that object literal, then you will end up with double curly braces. There’s nothing unusual about how they work, but they look funny and can be confusing.
```
export const styleMe = (
  <h1 style={{ background: "lightblue", color: "darkred" }}>
    Please style me! I am so bland!
  </h1>
);
```

## 3. Make A Style Object Variable
One problem with inline approach is that it becomes obnoxious if you want to use more than just a few styles. An alternative that’s often nicer is to store a style object in a variable, and then inject that variable into JSX.

The style object is defined on lines 3-6, and then injected on line 11.
```
const styles = {
  color: 'darkcyan',
  background: 'mintcream'
};

export class StyledClass extends React.Component {
  render() {
    return (
      <h1 style={styles}>
        Hello world
      </h1>
    );
  }
}
```

If you aren’t used to using modules, then this code may have made you twitch uncontrollably:
```
const style = {
  color: 'darkcyan',
  background: 'mintcream'
};
```

Defining a variable named style in the top-level scope would be an extremely bad idea in many JavaScript environments! In React, however, it’s totally fine.

Remember that every file is invisible to every other file, except for what you choose to expose via module.exports. You could have 100 different files, all with global variables named style, and there could be no conflicts.

## 4. Style Name Syntax
In regular JavaScript, style names are written in hyphenated-lowercase:
```
const styles = {
  'margin-top': '20px',
  'background-color': 'green'
};
```

In React, those same names are instead written in camelCase:
```
const styles = {
  marginTop: '20px',
  backgroundColor: 'green'
};
```

This has zero effect on style property values, only on style property names.

## 5. Style Value Syntax
Style names are slightly different in React than they are in regular JavaScript.

Style values are also slightly different in React than they are in regular JavaScript.

In regular JS, style values are almost always strings. Even if a style value is numeric, you usually have to write it as a string so that you can specify a unit. For example, you have to write "450px" or "20%".

In React, if you write a style value as a number, then the unit "px" is assumed.

How convenient! If you want a font size of 30px, you can write:
```
{ fontSize: 30 }
```

If you want to use units other than “px,” you can use a string:
```
{ fontSize: "2em" }
```

Specifying “px” with a string will still work, although it’s redundant.

A few specific styles will not automatically fill in the “px” for you. These are styles where you aren’t likely to use “px” anyway, so you don’t really have to worry about it. [Here is a list of styles that don’t assume “px”](https://github.com/facebook/react/blob/4131af3e4bf52f3a003537ec95a1655147c81270/src/renderers/dom/shared/CSSProperty.js#L15-L59).

## 6. Share Styles Across Multiple Components
What if you want to reuse styles for several different components?

One way to make styles reusable is to keep them in a separate JavaScript file. This file should export the styles that you want to reuse, via export. You can then import your styles into any component that wants them.
```
// facebookStyles.js

// facebook color palette
const blue = 'rgb(139, 157, 195)';
const darkBlue = 'rgb(059, 089, 152)';
const lightBlue = 'rgb(223, 227, 238)';
const grey = 'rgb(247, 247, 247)';
const white = 'rgb(255, 255, 255)';

const colorStyles = {
  blue: blue,
  darkBlue: darkBlue,
  lightBlue: lightBlue,
  grey: grey,
  white: white
};

// FacebookColorThief.js
import React from 'react';
import ReactDOM from 'react-dom';
import { colorStyles } from './facebookStyles';

let divStyle = {
  backgroundColor: styles.darkBlue,
  color: styles.white
};

export class Wow extends React.Component {
  render() {
    return (
      <div style={divStyle}>
        Wow, I stole these colors from Facebook!
      </div>
    );
  }
}

ReactDOM.render(
	<Wow />, 
	document.getElementById('app')
);
```
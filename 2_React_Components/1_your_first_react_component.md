# Your First React Component

## 1. Hello World, Part II... THE COMPONENT
React applications are made out of components.

What’s a component?

A component is a small, reusable chunk of code that is responsible for one job. That job is often to render some HTML.

Take a look at the code below. This code will create and render a new React component:
```
import React from 'react';
import ReactDOM from 'react-dom';
 
class MyComponentClass extends React.Component {
  render() {
    return <h1>Hello world</h1>;
  }
};
 
ReactDOM.render(
  `<MyComponentClass />`,
  document.getElementById('app')
);
```

There are both class components and function components. Class components because they are still widely used in legacy code, are common in tutorials/documentation found online, and are required for a few specific use-cases. In the module on Hooks, function components which are the recommended way of creating React components, will be introduced.

## 2. Import React
```
import React from 'react';
```
This creates an object named React which contains methods necessary to use the React library.

One of the methods contained in the React library is `React.createElement()`. When a JSX element is compiled, it transforms into a `React.createElement()` call.

For this reason, you have to import the React library, and save it in a variable named `React`, before you can use any JSX at all. `React.createElement()` must be available in order for JSX to work.

## 3. 
In order to create our first component, we next imported the ReactDOM:
```
import ReactDOM from 'react-dom';
```
This line of code is very similar to line 1.

Both import JavaScript objects. In both lines, the imported object contains React-related methods.

However, there is a difference.

The methods imported from `'react-dom'` are meant for interacting with the DOM. You are already familiar with one of them: `ReactDOM.render()`.

The methods imported from `'react'` don’t deal with the DOM at all. They don’t engage directly with anything that isn’t part of React.

To clarify: the DOM is used in React applications, but it isn’t part of React. After all, the DOM is also used in countless non-React applications. Methods imported from `'react'` are only for pure React purposes, such as creating components or writing JSX elements.

## 4. Create a Component Class
A React component is a small, reusable chunk of code that is responsible for one job, which often involves rendering HTML.

Here’s another fact about components: we can use a JavaScript class to define a new React component. We can also define components with JavaScript functions, but we’ll focus on class components first.

All class components will have some methods and properties in common (more on this later). Rather than rewriting those same properties over and over again every time, we extend the `Component` class from the React library. This way, we can use code that we import from the React library, without having to write it over and over again ourselves.

After we define our class component, we can use it to render as many instances of that component as we want.

`React.Component` is a JavaScript class. To create your own component class, you must subclass `React.Component`. You can do this by using the syntax 
```
class YourComponentNameGoesHere extends React.Component {}
```

JavaScript classes and subclassing are a complex topic beyond the scope of this course. If you aren’t comfortable with them, here are some good resources to consult: 
1. [Classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)
2. [Classes in-depth](https://hacks.mozilla.org/2015/07/es6-in-depth-classes/)
3. [Subclassing in-depth](https://hacks.mozilla.org/2015/08/es6-in-depth-subclassing/)
4. [More on classes](http://exploringjs.com/es6/ch_classes.html)

```
import React from 'react';
import ReactDOM from 'react-dom';
 
class MyComponentClass extends React.Component {
  render() {
    return <h1>Hello world</h1>;
  }
}
 
ReactDOM.render(
    `<MyComponentClass />`, 
    document.getElementById('app')
);
```
1. Line 4 declares a new component class, which is like a factory for building React components.
2. `React.Component` is a class, which you must subclass in order to create a component class of your own. 
3. `React.Component` is a property on the object which was returned by `import React from 'react`' on line 1.

## 5. Name a Component Class
Subclassing `React.Component` is the way to declare a new component class.

When you declare a new component class, you need to give that component class a name. On our finished component, our component class’s name was `MyComponentClass`:
```
class MyComponentClass extends React.Component {
  render() {
    return <h1>Hello world</h1>;
  }
}
```
Component class variable names must begin with capital letters.

This adheres to JavaScript’s class syntax. This naming convention is also seen in other languages that write [class names in UpperCamelCase, like Java](https://en.wikipedia.org/wiki/Naming_convention_(programming)#Java).

In addition, there is a React-specific reason why component class names must always be capitalized.

## 6. Component Class Instructions
```
import React from 'react';
import ReactDOM from 'react-dom';

class MyComponentClass extends React.Component {
  render() {
    return <h1>Hello world</h1>;
  }
}

ReactDOM.render(
	`<MyComponentClass />`, 
	document.getElementById('app')
);
```
- On line 1, `import React from 'react'` creates a JavaScript object. This object contains properties that are needed to make React work, such as `React.createElement()` and `React.Component`.

- On line 2, `import ReactDOM from 'react-dom'` creates another JavaScript object. This object contains methods that help React interact with the DOM, such as `ReactDOM.render()`.

- On line 4, by subclassing `React.Component`, you create a new component class. This is not a component. A component class is more like a factory that produces components. When you start making components, each one will come from a component class.

- Whenever you create a component class, you need to give that component class a name. That name should be written in UpperCamelCase. In this case, your chosen name is `MyComponentClass`.

- The body of your component class is the pair of curly braces after `React.Component,` and all of the code between those curly braces.

- Like all JavaScript classes, this one needs a body. The body will act as a set of instructions, explaining to your component class how it should build a React component.

Here’s what your class body would look like on its own, without the rest of the class declaration syntax. 
```
{
  render() {
    return <h1>Hello world</h1>;
  }
}
```

## 7. The Render Function
A component class is like a factory that builds components. It builds these components by consulting a set of instructions, which you must provide.

For starters, these instructions should take the form of a class declaration body. That means that they will be delimited by curly braces, like this:
```
class ComponentFactory extends React.Component {
  // instructions go here, between the curly braces
}
```
The instructions should be written in typical [JavaScript ES2015 class syntax](http://exploringjs.com/es6/ch_classes.html).

There is only one property that you have to include in your instructions: a render method.

A render method is a property whose name is `render`, and whose value is a function. The term “render method” can refer to the entire property, or to just the function part.
```
class ComponentFactory extends React.Component {
  render() {}
}
```
A render method must contain a `return` statement. Usually, this `return` statement returns a JSX expression:
```
class ComponentFactory extends React.Component {
  render() {
    return <h1>Hello world</h1>;
  }
}
```

## 8. Create a Component Instance
`MyComponentClass` is now a working component class. It’s ready to follow its instructions and make some React components.

To make a React component! It only takes one more line:
```
`<MyComponentClass />`
```
To make a React component, you write a JSX element. Instead of naming your JSX element something like `h1` or `div` like you’ve done before, give it the same name as a component class. Voilà, there’s your component instance!

JSX elements can be either HTML-like, or component instances. JSX uses capitalization to distinguish between the two. That is the React-specific reason why component class names must begin with capital letters. In a JSX element, that capitalized first letter says, “I will be a component instance and not an HTML tag.”

## 9. Render A Component
A component class needs a set of instructions, which tell the component class how to build components. When you make a new component class, these instructions are the body of your class declaration:
```
class MyComponentClass extends React.Component
{ // everything in between these curly-braces is instructions for how to build components
 
  render() {
    return <h1>Hello world</h1>;
  }
}
```
This class declaration results in a new component class, in this case named `MyComponentClass`. `MyComponentClass` has one method, named `render`. This all happens via standard JavaScript class syntax.

You haven’t learned how these instructions actually work to make components! When you make a component by using the expression `<MyComponentClass />`, what do these instructions do?

Whenever you make a component, that component inherits all of the methods of its component class. `MyComponentClass` has one method: `MyComponentClass.render()`. Therefore, `<MyComponentClass />` also has a method named `render`.

You could make a million different `<MyComponentClass />` instances, and each one would inherit this same exact `render` method.

This lesson’s final exercise is to render your component. In order to render a component, that component needs to have a method named `render`. Your component has this! It inherited a method named `render` from `MyComponentClass`.

Since your component has a render method, all that’s left to do is call it. This happens in a slightly unusual way.

To call a component’s `render` method, you pass that component to `ReactDOM.render()`. Notice your component, being passed as `ReactDOM.render()`‘s first argument:
```
ReactDOM.render(
  <MyComponentClass />,
  document.getElementById('app')
);
```
`ReactDOM.render()` will tell `<MyComponentClass />` to call its render method.

`<MyComponentClass />` will call its render method, which will return the JSX element `<h1>Hello world</h1>`. `ReactDOM.render()` will then take that resulting JSX element, and add it to the virtual DOM. This will make “Hello world” appear on the screen.

```
import React from 'react';
import ReactDOM from 'react-dom';

class MyComponentClass extends React.Component {
  render() {
    return <h1>Hello world</h1>;
  }
}

ReactDOM.render(<MyComponentClass />, document.getElementById('app'));
```
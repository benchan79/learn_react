# The Effect Hook

## 1. Why Use useEffect?
Before Hooks, function components were only used to accept data in the form of props and return some JSX to be rendered. However, as we learned in the last lesson, the State Hook allows us to manage dynamic data, in the form of component state, within our function components.

In this lesson, we’ll use the Effect Hook to run some JavaScript code after each render, such as:

- fetching data from a backend service
- subscribing to a stream of data
- managing timers and intervals
- reading from and making changes to the DOM

### Why after each render?
Most interesting components will re-render multiple times throughout their lifetime and these key moments present the perfect opportunity to execute these “side effects”.

There are three key moments when the Effect Hook can be utilized:

1. When the component is first added, or mounted, to the DOM and renders
2. When the state or props change, causing the component to re-render
3. When the component is removed, or unmounted, from the DOM.
```
import React, {Component} from 'react';

export default class PageTitle extends Component {
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
    document.title == `Hi, ${this.state.name}`;
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
```
```
import React, { useState, useEffect } from 'react';
 
export default function PageTitle() {
  const [name, setName] = useState('');
 
 useEffect(() => {
    document.title = `Hi, ${name}`;
  }, [name]);
 
  return (
    <div>
      <p>Use {name} input field below to rename this page!</p>
      <input 
        onChange={({target}) => setName(target.value)} 
        value={name} 
        type='text' />
    </div>
  );
}
```
In the editor, we’ve defined a component as both a class and a function, each with the same “side effects”.

Even if you are unfamiliar with [class component lifecycle methods](https://reactjs.org/docs/react-component.html#commonly-used-lifecycle-methods), start by having a look at both implementations, just to get a sense of both options.

Note: Understanding lifecycle methods in class components is not a pre-requisite for this lesson.

In the class component in **PageTitleClass.js**, the logic for setting the document title is split between two functions –`componentDidMount()` and `componentDidUpdate()`.

Compare this to the function component in **PageTitleFunction.js**, where the logic is written in one place – `useEffect()`.

Both component implementations have the same behavior, but reading and maintaining the function component will be easier.
<hr>

## 2. Function Component Effects
Let’s break down how our `PageTitle()` function component is using the Effect Hook to execute some code after each render!
```
import React, { useState, useEffect } from 'react';
 
function PageTitle() {
  const [name, setName] = useState('');
 
  useEffect(() => {
    document.title = `Hi, ${name}`;
  });
 
  return (
    <div>
      <p>Use the input field below to rename this page!</p>
      <input onChange={({target}) => setName(target.value)} value={name} type='text' />
    </div>
  );
}
```
First, we import the Effect Hook from the `react` library, like so:
```
import { useEffect } from 'react';
```
The Effect Hook is used to call another function that does something for us so there is nothing returned when we call the `useEffect()` function.

The first argument passed to the `useEffect()` function is the callback function that we want React to call after each time this component renders. We will refer to this callback function as our `effect`.

In our example, the effect is:
```
() => { document.title = `Hi, ${name}`; }
```

In our effect, we assign the value of the `name` variable to the `document.title` within a string. For more on this syntax, have a look at this [explanation of the document’s title property](https://developer.mozilla.org/en-US/docs/Web/API/Document/title).

Notice how we use the current state inside of our effect. Even though our effect is called after the component renders, we still have access to the variables in the scope of our function component! When React renders our component, it will update the DOM as usual, and then run our effect after the DOM has been updated. This happens for every render, including the first and last one.
<hr>

## 3. Clean Up Effects
Some effects require cleanup. For example, we might want to add event listeners to some element in the DOM, beyond the JSX in our component. When we [add event listeners to the DOM](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener), it is important to remove those event listeners when we are done with them to avoid [memory leaks](https://auth0.com/blog/four-types-of-leaks-in-your-javascript-code-and-how-to-get-rid-of-them/!

Let’s consider the following effect:
```
useEffect(()=>{
  document.addEventListener('keydown', handleKeyPress);
  // Specify how to clean up after the effect:
  return () => {
    document.removeEventListener('keydown', handleKeyPress);
  };
})
```
If our effect didn’t return a cleanup function, then a new event listener would be added to the DOM’s `document` object every time that our component re-renders. Not only would this cause bugs, but it could cause our application performance to diminish and maybe even crash!

Because effects run after every render and not just once, React calls our cleanup function before each re-render and before unmounting to clean up each effect call.

If our effect returns a function, then the `useEffect() `Hook always treats that as a cleanup function. React will call this cleanup function before the component re-renders or unmounts. Since this cleanup function is optional, it is our responsibility to return a cleanup function from our effect when our effect code could create memory leaks.

## 4. Control When Effects Are Called
The `useEffect()` function calls its first argument (the effect) after each time a component renders. We’ve learned how to return a cleanup function so that we don’t create performance issues and other bugs, but sometimes we want to skip calling our effect on re-renders altogether.

It is common, when defining function components, to run an effect only when the component mounts (renders the first time), but not when the component re-renders. The Effect Hook makes this very easy for us to do! If we want to only call our effect after the first render, we pass an empty array to `useEffect()` as the second argument. This second argument is called the dependency array.

The dependency array is used to tell the `useEffect()` method when to call our effect and when to skip it. Our effect is always called after the first render but only called again if something in our dependency array has changed values between renders.

We will continue to learn more about this second argument over the next few exercises, but for now, we’ll focus on using an empty dependency array to call an effect when a component first mounts, and if a cleanup function is returned by our effect, calling that when the component unmounts.
```
useEffect(() => {
  alert("component rendered for the first time");
  return () => {
    alert("component is being removed from the DOM");
  };
}, []); 
```
Without passing an empty array as the second argument to the `useEffect()` above, those alerts would be displayed before and after every render of our component, which is clearly not when those messages are meant to be displayed. Simply, passing `[]` to the `useEffect() `function is enough to configure when the effect and cleanup functions are called!
<hr>

## 5. Fetch Data
When building software, we often start with default behaviors then modify them to improve performance. We’ve learned that the default behavior of the Effect Hook is to call the effect function after every single render. Next, we learned that we can pass an empty array as the second argument for `useEffect()` if we only want our effect to be called after the component’s first render. In this exercise, we’ll learn to use the dependency array to further configure exactly when we want our effect to be called!

When our effect is responsible for fetching data from a server, we pay extra close attention to when our effect is called. Unnecessary round trips back and forth between our React components and the server can be costly in terms of:

- Processing
- Performance
- Data usage for mobile users
- API service fees

When the data that our components need to render doesn’t change, we can pass an empty dependency array, so that the data is fetched after the first render. When the response is received from the server, we can use a state setter from the State Hook to store the data from the server’s response in our local component state for future renders. Using the State Hook and the Effect Hook together in this way is a powerful pattern that saves our components from unnecessarily fetching new data after every render!

An empty dependency array signals to the Effect Hook that our effect never needs to be re-run, that it doesn’t depend on anything. Specifying zero dependencies means that the result of running that effect won’t change and calling our effect once is enough.

A dependency array that is not empty signals to the Effect Hook that it can skip calling our effect after re-renders unless the value of one of the variables in our dependency array has changed. If the value of a dependency has changed, then the Effect Hook will call our effect again!

Here’s a nice example from the official React docs:
```
useEffect(() => {
  document.title = `You clicked ${count} times`;
}, [count]); // Only re-run the effect if the value stored by count changes
```
<hr>

## 6. Rules of Hooks
There are two main rules to keep in mind when using Hooks:

- only call Hooks at the top level
- only call Hooks from React functions
As we have been practicing with the State Hook and the Effect Hook, we’ve been following these rules with ease, but it is helpful to keep these two rules in mind as you take your new understanding of Hooks out into the wild and begin using [more Hooks](https://reactjs.org/docs/hooks-reference.html) in your React applications.

When React builds the Virtual DOM, the library calls the functions that define our components over and over again as the user interacts with the user interface. React keeps track of the data and functions that we are managing with Hooks based on their order in the function component’s definition. For this reason, we always call our Hooks at the top level; we never call hooks inside of loops, conditions, or nested functions.

Instead of confusing React with code like this:
```
if (userName !== '') {
  useEffect(() => {
    localStorage.setItem('savedUserName', userName);
  });
}
```
We can accomplish the same goal, while consistently calling our Hook every time:

useEffect(() => {
  if (userName !== '') {
    localStorage.setItem('savedUserName', userName);
  }
});
Secondly, Hooks can only be used in React Functions. We cannot use Hooks in class components and we cannot use Hooks in regular JavaScript functions. We’ve been working with `useState()` and `useEffect()` in function components, and this is the most common use. The only other place where Hooks can be used is within custom hooks. Custom Hooks are incredibly useful for organizing and reusing stateful logic between function components. For more on this topic, head to the [React Docs](https://reactjs.org/docs/hooks-custom.html).
<hr>

## 7. Separate Hooks for Separate Effects
When multiple values are closely related and change at the same time, it can make sense to group these values in a collection like an object or array. Packaging data together can also add complexity to the code responsible for managing that data. Therefore, it is a good idea to separate concerns by managing different data with different Hooks.

Compare the complexity here, where data is bundled up into a single object:
```
// Handle both position and menuItems with one useEffect hook.
const [data, setData] = useState({ position: { x: 0, y: 0 } });
useEffect(() => {
  get('/menu').then((response) => {
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
```
To the simplicity here, where we have separated concerns:
```
// Handle menuItems with one useEffect hook.
const [menuItems, setMenuItems] = useState(null);
useEffect(() => {
  get('/menu').then((response) => setMenuItems(response.data));
}, []);
 
// Handle position with a separate useEffect hook.
const [position, setPosition] = useState({ x: 0, y: 0 });
useEffect(() => {
  const handleMove = (event) =>
    setPosition({ x: event.clientX, y: event.clientY });
  window.addEventListener('mousemove', handleMove);
  return () => window.removeEventListener('mousemove', handleMove);
}, []);
```
It is not always obvious[ whether to bundle data together or separate it](https://reactjs.org/docs/hooks-faq.html#should-i-use-one-or-many-state-variables), but with practice, we get better at organizing our code so that it is easier to understand, add to, reuse, and test!
<hr>

## 8. Lesson Review
In this lesson, we learned how to write effects that manage timers, manipulate the DOM, and fetch data from a server. In earlier versions of React, we could only have executed this type of code in the [lifecycle methods of class components](https://reactjs.org/docs/state-and-lifecycle.html#adding-lifecycle-methods-to-a-class), but with the Effect Hook, we can perform these types of actions in function components with ease!

Let’s review the main concepts from this lesson:

- `useEffect()` - we can import this function from the 'react' library and call it in our function components
- `effect` - refers to a function that we pass as the first argument of the `useEffect()` function. By default, the Effect Hook calls this effect after each render
- cleanup function - the function that is optionally returned by the effect. If the effect does anything that needs to be cleaned up to prevent memory leaks, then the effect returns a cleanup function, then the Effect Hook will call this cleanup function before calling the effect again as well as when the component is being unmounted
- dependency array - this is the optional second argument that the `useEffect()` function can be called with in order to prevent repeatedly calling the effect when this is not needed. This array should consist of all variables that the effect depends on.

The Effect Hook is all about scheduling when our effect’s code gets executed. We can use the dependency array to configure when our effect is called in the following ways:

| Dependency Array | Effect called after first render & …           |
| ---------------- | ------------------------------------           |
| undefined        | every re-render                                |
| Empty array      | no re-renders                                  |
| Non-empty array  | when any value in the dependency array changes |


Hooks gives us the flexibility to organize our code in different ways, grouping related data as well as separating concerns to keep code simple, error-free, reusable, and testable!
# The State Hook

## 1. Why Use Hooks?
As React developers, we love breaking down complex problems into simple pieces.

Classes, however, are not simple. They:

- are difficult to reuse between components
- are tricky and time-consuming to test
h- ave confused many developers and caused lots of bugs

The React core team heard all of this feedback from developers like us, and they engineered an incredible solution for us! React 16.8+ supports Hooks. With Hooks, we can use simple function components to do lots of the fancy things that we could only do with class components in the past.

React Hooks, plainly put, are functions that let us manage the internal state of components and handle post-rendering side effects directly from our function components. Hooks don’t work inside classes — they let us use fancy React features without classes. Keep in mind that function components and React Hooks do not replace class components. They are completely optional; just a new tool that we can take advantage of.

Note: If you’re familiar with [lifecycle methods](https://reactjs.org/docs/state-and-lifecycle.html#adding-lifecycle-methods-to-a-class) of class components, you could say that Hooks let us “hook into” state and lifecycle features directly from our function components.

React offers a number of built-in Hooks. A few of these include `useState()`, `useEffect()`, `useContext()`, `useReducer()`, and `useRef()`. See the [full list in the docs](https://reactjs.org/docs/hooks-reference.html). In this lesson, we’ll learn different ways to manage state in a function component.
<hr>

## 2. Update Function Component State
Let’s get started with the State Hook, the most common Hook used for building React components. The State Hook is a named export from the React library, so we import it like this:
```
import React, { useState } from 'react';
```
`useState()` is a JavaScript function defined in the React library. When we call this function, it returns an array with two values:

- current state - the current value of this state
- state setter - a function that we can use to update the value of this state
Because React returns these two values in an array, we can assign them to local variables, naming them whatever we like. For example:
```
const [toggle, setToggle] = useState();
```
Let’s have a look at an example of a function component using the State Hook:
```
import React, { useState } from "react";
 
function Toggle() {
  const [toggle, setToggle] = useState();
 
  return (
    <div>
      <p>The toggle is {toggle}</p>
      <button onClick={() => setToggle("On")}>On</button>
      <button onClick={() => setToggle("Off")}>Off</button>
    </div>
  );
}
```
Notice how the state setter function, `setToggle()`, is called by our `onClick` event listeners. To update the value of `toggle` and re-render this component with the new value, all we need to do is call the `setToggle()` function with the next state value as an argument.

No need to worry about binding functions to class instances, working with constructors, or dealing with the `this` keyword. With the State Hook, updating state is as simple as calling a state setter function.

Calling the state setter signals to React that the component needs to re-render, so the whole function defining the component is called again. The magic of `useState()` is that it allows React to keep track of the current value of state from one render to the next!
<hr>

## 3. Initialize State
Great work building out your first stateful function component in the last exercise. Just like you used the State Hook to manage a variable with string values, we can use the State Hook to manage the value of any [primitive data type ](https://www.codecademy.com/courses/introduction-to-javascript/lessons/introduction-to-javascript/exercises/types) and even data collections like arrays and objects!

Have a look at the following function component. What data type does this state variable hold?
```
import React, { useState } from 'react';
 
function ToggleLoading() {
  const [isLoading, setIsLoading] = useState();
 
  return (
    <div>
      <p>The data is {isLoading ? 'Loading' : 'Not Loading'}</p>
      <button onClick={() => setIsLoading(true)}>
        Turn Loading On
      </button>
      <button onClick={() => setIsLoading(false)}>
        Turn Loading Off
      </button>
    </div>
  );
}
```
The `ToggleLoading()` function component above is using the simplest of all data types, a boolean. Booleans are frequently used in React applications to represent whether data has loaded or not. In the example above, we see that `true` and `false` values are passed to the state setter, `setIsLoading()`. This code works just fine as is, but what if we want our component to start off with `isLoading` set to `true`?

To initialize our state with any value we want, we simply pass the initial value as an argument to the `useState()` function call.
```
const [isLoading, setIsLoading] = useState(true);
```
There are three ways in which this code affects our component:

1. During the first render, the initial state argument is used.
2. When the state setter is called, React ignores the initial state argument and uses the new value.
3. When the component re-renders for any other reason, React continues to use the same value from the previous render.

If we don’t pass an initial value when calling `useState()`, then the current value of the state during the first render will be `undefined`. Often, this is perfectly fine for the machines, but it can be unclear to the humans reading our code. So, we prefer to explicitly initialize our state. If we don’t have the value needed during the first render, we can explicitly pass `null` instead of just passively leaving the value as `undefined`.

## 4. Use State Setter Outside of JSX
Let’s see how to manage the changing value of a string as a user types into a text input field:
```
import React, { useState } from 'react';
 
export default function EmailTextInput() {
  const [email, setEmail] = useState('');
  const handleChange = (event) => {
    const updatedEmail = event.target.value;
    setEmail(updatedEmail);
  }
 
  return (
    <input value={email} onChange={handleChange} />
  );
}
```
Let’s break down how this code works!

- The square brackets on the left side of the assignment operator signal [array destructuring](https://www.codecademy.com/content-items/92a5f93c6dbc6794d83e00383fc3af68)
- The local variable named `email` is assigned the current state value at index `0` from the array returned by `useState()`
- The local variable named `setEmail()` is assigned a reference to the state setter function at index `1` from the array returned by `useState()`
- It’s convention to name this variable using the current state variable (`email`) with “set” prepended

The JSX input tag has an event listener called `onChange`. This event listener calls an event handler each time the user types something in this element. In the example above, our event handler is defined inside of the definition for our function component, but outside of our JSX. Earlier in this lesson, we wrote our event handlers right in our JSX. Those inline event handlers work perfectly fine, but when we want to do something more interesting than just calling the state setter with a static value, it’s a good idea to separate that logic from everything else going on in our JSX. This separation of concerns makes our code easier to read, test, and modify.

This is so common in React code, that we can comfortably simplify this:
```
const handleChange = (event) => {
  const newEmail = event.target.value;
  setEmail(newEmail);
}
```
To this:
```
const handleChange = (event) => setEmail(event.target.value);
```
Or even, use object destructuring to just write this:
```
const handleChange = ({target}) => setEmail(target.value);
```
All three of these code snippets behave the same way, so there really isn’t a right and wrong between these different ways of doing this. We’ll use the last, most concise version moving forward.

## 5. Set From Previous State
Often, the next value of our state is calculated using the current state. In this case, it is best practice to update state with a callback function. If we do not, we risk capturing outdated, or “stale”, state values.

Let’s take a look at the following code:
```
import React, { useState } from 'react';
 
export default function Counter() {
  const [count, setCount] = useState(0);
 
  const increment = () => setCount(prevCount => prevCount + 1);
 
  return (
    <div>
      <p>Wow, you've clicked that button: {count} times</p>
      <button onClick={increment}>Click here!</button>
    </div>
  );
}
```

When the button is pressed, the `increment()` event handler is called. Inside of this function, we use our `setCount()` state setter in a new way! Because the next value of `count` depends on the previous value of `count`, we pass a callback function as the argument for `setCount()` instead of a value (as we’ve done in previous exercises).
```
setCount(prevCount => prevCount + 1)
```
When our state setter calls the callback function, this *state setter callback function* takes our previous `count` as an argument. The value returned by this state setter callback function is used as the next value of `count` (in this case `prevCount + 1`). Note: We can just call `setCount(count +1)` and it would work the same in this example… but for reasons that are out of scope for this lesson, it is safer to use the callback method. If you’d like to learn more about why the callback method is safer, [this section of the docs]{https://reactjs.org/docs/react-component.html#setstate} is a great place to start.

## 6. Arrays in State
Think about the last time that you ordered a pizza online. Mmmmm…

Part of the magical website that brought you tasty food was built with code like this:
```
import React, { useState } from "react";
 
const options = ["Bell Pepper", "Sausage", "Pepperoni", "Pineapple"];
 
export default function PersonalPizza() {
  const [selected, setSelected] = useState([]);
 
  const toggleTopping = ({target}) => {
    const clickedTopping = target.value;
    setSelected((prev) => {
     // check if clicked topping is already selected
      if (prev.includes(clickedTopping)) {
        // filter the clicked topping out of state
        return prev.filter(t => t !== clickedTopping);
      } else {
        // add the clicked topping to our state
        return [clickedTopping, ...prev];
      }
    });
  };
 
  return (
    <div>
      {options.map(option => (
        <button value={option} onClick={toggleTopping} key={option}>
          {selected.includes(option) ? "Remove " : "Add "}
          {option}
        </button>
      ))}
      <p>Order a {selected.join(", ")} pizza</p>
    </div>
  );
}
```
JavaScript arrays are the best data model for managing and rendering JSX lists. In this example, we are using two arrays:

- `options` is an array that contains the names of all of the pizza toppings available
- `selected` is an array representing the selected toppings for our personal pizza

The `options` array contains static data, meaning that it does not change. We like to define static data models outside of our function components since they don’t need to be recreated each time our component re-renders. In our JSX, we use the `map` method to render a button for each of the toppings in our `options` array.

The `selected` array contains dynamic data, meaning that it changes, usually based on a user’s actions. We initialize `selected` as an empty array. When a button is clicked, the `toggleTopping` event handler is called. Notice how this event handler uses information from the event object to determine which topping was clicked.

When updating an array in state, we do not just add new data to the previous array. We replace the previous array with a brand new array. This means that any information that we want to save from the previous array needs to be explicitly copied over to our new array. That’s what this [spread syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax) does for us: `...prev`.

Notice how we use the `includes()`, `filter()`, and `map()` methods of our arrays. If these are new to you, or you just want a refresher, take a minute to review these [array methods](https://www.codecademy.com/learn/introduction-to-javascript/modules/learn-javascript-iterators). We don’t need to be full-fledged JavaScript gurus to build React UIs, but know that investing time to [strengthen our JavaScript skills](https://www.codecademy.com/learn/introduction-to-javascript), will always help us do more faster (and have a lot more fun doing it) as React developers.

## 7. Objects in State
When we work with a set of related variables, it can be very helpful to group them in an object. Let’s look at an example!
```
export default function Login() {
  const [formState, setFormState] = useState({});
 
  const handleChange = ({ target }) => {
    const { name, value } = target;
    setFormState((prev) => ({
      ...prev,
      [name]: value
    }));
  };
 
  return (
    <form>
      <input
        value={formState.firstName}
        onChange={handleChange}
        name="firstName"
        type="text"
      />
      <input
        value={formState.password}
        onChange={handleChange}
        type="password"
        name="password"
      />
    </form>
  );
}
```
A few things to notice:

- We use a state setter callback function to update state based on the previous value
- The spread syntax is the same for objects as for arrays: `{ ...oldObject, newKey: newValue }`
- We reuse our event handler across multiple inputs by using the input tag’s `name` attribute to identify which input the change event came from

Once again, when updating the state with `setFormState()` inside a function component, we do not modify the same object. We must copy over the values from the previous object when setting the next value of state. Thankfully, the spread syntax makes this super easy to do!

Anytime one of the input values is updated, the `handleChange()` function will be called. Inside of this event handler, we use object destructuring to unpack the `target` property from our `event` object, then we use object destructuring again to unpack the `name` and `value` properties from the `target` object.

Inside of our state setter callback function, we wrap our curly brackets in parentheses like so:` setFormState((prev) => ({ ...prev }))`. This tells JavaScript that our curly brackets refer to a new object to be returned. We use `...`, the spread operator, to fill in the corresponding fields from our previous state. Finally, we overwrite the appropriate key with its updated value. Did you notice the square brackets around the `name`? This [Computed Property Name](http://eloquentcode.com/computed-property-names-in-javascript) allows us to use the string value stored by the `name` variable as a property key!
<hr>

## 8. Separate Hooks for Separate States
While there are times when it can be helpful to store related data in a data collection like an array or object, it can also be helpful to separate data that changes separately into completely different state variables. Managing dynamic data is much easier when we keep our data models as simple as possible.

For example, if we had a single object that held state for a subject you are studying at school, it might look something like this:
```
function Subject() {
  const [state, setState] = useState({
    currentGrade: 'B',
    classmates: ['Hasan', 'Sam', 'Emma'],
    classDetails: {topic: 'Math', teacher: 'Ms. Barry', room: 201};
    exams: [{unit: 1, score: 91}, {unit: 2, score: 88}]);
  });
```
This would work, but think about how messy it could get to copy over all the other values when we need to update something in this big state object. For example, to update the grade on an exam, we would need an event handler that did something like this:
```
setState((prev) => ({
 ...prev,
  exams: prev.exams.map((exam) => {
    if( exam.unit === updatedExam.unit ){
      return { 
        ...exam,
        score: updatedExam.score
      };
    } else {
      return exam;
    }
  }),
}));
```
Yikes! Complex code like this is likely to cause bugs! Luckily, there is another option… We can make more than one call to the State Hook. In fact, we can make as many calls to `useState()` as we want! It’s best to split state into multiple state variables based on which values tend to change together. We can rewrite the previous example as follows…
```
function Subject() {
  const [currentGrade, setGrade] = useState('B');
  const [classmates, setClassmates] = useState(['Hasan', 'Sam', 'Emma']);
  const [classDetails, setClassDetails] = useState({topic: 'Math', teacher: 'Ms. Barry', room: 201});
  const [exams, setExams] = useState([{unit: 1, score: 91}, {unit: 2, score: 88}]);
  // ...
}
```
Managing dynamic data with separate state variables has many advantages, like making our code more simple to write, read, test, and reuse across components.

Often, we find ourselves packaging up and organizing data in collections to pass between components, then separating that very same data within components where different parts of the data change separately. The wonderful thing about working with Hooks is that we have the freedom to organize our data the way that makes the most sense to us!

If you’d like, have a look at another example of using [multiple State Hooks for managing separate data](https://reactjs.org/docs/hooks-state.html#tip-using-multiple-state-variables).
<hr>

## 9. Lesson Review
- With React, we feed static and dynamic data models to JSX to render a view to the screen

- Use Hooks to “hook into” internal component state for managing dynamic data in function components

- We employ the State Hook by using the code below:

  - `currentState` to reference the current value of state

  - `stateSetter` to reference a function used to update the value of this state

  - the `initialState` argument to initialize the value of state for the component’s first render
```
const [currentState, stateSetter] = useState( initialState );
```
- Call state setters in event handlers

- Define simple event handlers inline with our JSX event listeners and define complex event handlers outside of our JSX

- Use a state setter callback function when our next value depends on our previous value

- Use arrays and objects to organize and manage related data that tends to change together

- Use the spread syntax on collections of dynamic data to copy the previous state into the next state like so: `setArrayState((prev) => [ ...prev ])` and `setObjectState((prev) => ({ ...prev }))`

- Split state into multiple, simpler variables instead of throwing it all into one state object

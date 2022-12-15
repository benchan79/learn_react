# Stateless Functional Components
In the code editor, take a look at Example.js. The first `Example` component is defined as a JavaScript class, but it doesn’t have to be! In React, we can also define components as JavaScript functions — we call them function components to differentiate them from class components.
```
// A component class written in the usual way:
export class MyComponentClass extends React.Component {
  render() {
    return <h1>Hello world</h1>;
  }
}

// The same component class, written as a stateless functional component:
export const MyComponentClass = () => {
  return <h1>Hello world</h1>;
}

// Works the same either way:
ReactDOM.render(
	<MyComponentClass />,
	document.getElementById('app')
);
```
In the latest versions of React, function components can do everything that class components can do. In most cases, however, function components offer a more elegant, concise way of creating React components. This lesson will focus on converting a class component to a function component and adding props, which are available in all versions of React.

Compare the `Example` class component and the `Example` function component. For the most basic function components, all you need to do is remove the beginning `render() {` and ending `}` of the `render()` method:
```
render() { // Delete this
  return <h1>Hello</h1>
} // Delete this
```
To put it in other words: the function component should return the same JSX that was originally returned by the `render()` method.
<hr>

## 2. Function Components and Props
Like any component, function components can receive information via `props`.

To access these `props`, give your function component a parameter named `props`. Within the function body, you can access the props using this pattern: `props.propertyName`. You don’t need to use the this keyword.
```
export function YesNoQuestion (props) {
  return (
    <div>
      <p>{props.prompt}</p>
      <input value="Yes" />
      <input value="No" />
    </div>
  );
}
 
ReactDOM.render(
  <YesNoQuestion prompt="Have you eaten an apple today?" />,
  document.getElementById('app');
);
```
In the above example, we pass a value of “Have you eaten an apple today?” as the `prompt` prop when rendering `YesNoQuestion`.
<hr>

## 3. Review
1. Function components are React components defined as JavaScript functions
2. Function components must return JSX
3. Function components may accept a props parameter. Expect it to be a JavaScript object

Although function components and class components can do the same things, you’ll see a lot of function components in the React documentation and example apps. Some developers prefer them over class components for their simplicity and straightforward features, like Hooks, which you’ll learn later in your coding journey.
# React Forms

## 1. React Forms

Think about how forms work in a typical, non-React environment. A user types some data into a form’s input fields, and the server doesn’t know about it. The server remains clueless until the user hits a “submit” button, which sends all of the form’s data over to the server simultaneously.

In React, as in many other JavaScript environments, this is not the best way of doing things.

The problem is the period of time during which a form thinks that a user has typed one thing, but the server thinks that the user has typed a different thing. What if, during that time, a third part of the website needs to know what a user has typed? It could ask the form or the server and get two different answers. In a complex JavaScript app with many moving, interdependent parts, this kind of conflict can easily lead to problems.

In a React form, you want the server to know about every new character or deletion, as soon as it happens. That way, your screen will always be in sync with the rest of your application.

## 2. Input onChange
A traditional form doesn’t update the server until a user hits “submit.” But you want to update the server any time a user enters or deletes any character.

## 3. Write an Input Event Handler
Define a function that gets called whenever a user enters or deletes any character.

This function will be an event handler. It will listen for change events. 
```
import React from 'react';

export class Example extends React.Component {
	constructor(props) {
		super(props);

		this.state = { userInput: '' };

		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(e) {
	  this.setState({
	    userInput: e.target.value
	  });
	}

	render() {
	  return (
	    <input 
	      onChange={this.handleChange} 
	      type="text" />
	  );
	}
}
```

## 4. Set the Input's Initial State
Any time that someone types or deletes in `<input />`, the `.handleUserInput()` method will update `this.state.userInput` with the `<input />`‘s text.

Since you’re using `this.setState`, that means that `Input` needs an initial state.

The initial text should be blank otherwise it would look like someone had already typed something.

## 5. Update an Input's Value
When a user types or deletes in the `<input />`, then that will trigger a change event, which will call `handleUserInput`.

`handleUserInput` will set `this.state.userInput` equal to whatever text is currently in the input field.

Then make the `<input />`‘s text responsive to `this.state.userInput` by setting its value attribute.

## 6. Controlled vs Uncontrolled
There are two terms that will probably come up when you talk about React forms: controlled component and uncontrolled component. Like automatic binding, controlled vs uncontrolled components is a topic that you should be familiar with, but don’t need to understand deeply at this point.

An uncontrolled component is a component that maintains its own internal state. A controlled component is a component that does not maintain any internal state. Since a controlled component has no state, it must be controlled by someone else.

Think of a typical `<input type='text' />` element. It appears onscreen as a text box. If you need to know what text is currently in the box, then you can ask the `<input />`, possibly with some code like this:
```
let input = document.querySelector('input[type="text"]');
 
let typedText = input.value; // input.value will be equal to whatever text is currently in the text box.
```

The important thing here is that the `<input />` keeps track of its own text. You can ask it what its text is at any time, and it will be able to tell you.

The fact that `<input />` keeps track of information makes it an uncontrolled component. It maintains its own internal state, by remembering data about itself.

A controlled component, on the other hand, has no memory. If you ask it for information about itself, then it will have to get that information through `props`. Most React components are controlled.

In React, when you give an `<input />` a `value` attribute, then something strange happens: the `<input />` BECOMES controlled. It stops using its internal storage. This is a more ‘React’ way of doing things.

You can find more information about controlled and uncontrolled components in the [React Forms documentation](https://reactjs.org/docs/forms.html).

## 7. React Forms Recap

Notice that you didn’t use a submit button. You didn’t even use a `<form>` element! Your “form” was actually just an `<input />`.

That won’t always be the case. You will still sometimes want a `<form>` element and a submit button, especially if you need to differentiate between a finished form and an in-progress form. But in some cases, it’s fine to have a “form” that is really just an input field.

This is because, unlike in the traditional form paradigm, in React you re-send your form on every single character change. That removes the need to ever “submit” anything.
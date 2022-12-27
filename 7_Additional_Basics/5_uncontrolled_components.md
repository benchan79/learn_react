# What are Uncontrolled Components?

So, you’re building a React application and you need to get some input from your users. You reach for an `<input>` element and go with the recommended approach of making a [controlled component](https://reactjs.org/docs/forms.html). But did you know that you can also create uncontrolled components?

## Controlled Components
Let’s begin with a quick recap on controlled components. Remember, while form elements (`<input>`, `<textarea>,` etc…) are capable of managing their own internal state, in React we typically prefer to maintain any mutable state values within the state property of our components.

To gain control over a form element’s internal state, we can provide a `value` attribute on the `<input>` element and assign a component state variable to it.

```
import ReactDOM from "react-dom";
import React, { useState } from "react";

function PhoneNumberForm() {
  const [number, setNumber] = useState(0);

  const handleChange = (e) => {
    const newNumber = e.target.value;

    if (!Number.isNaN(Number(newNumber)) && newNumber.length <= 10) {
      setNumber(e.target.value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Sending confirmation code to ${number}.`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Phone Number:
        <input type="tel" value={number} onChange={handleChange} />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}

const app = document.getElementById('app');

ReactDOM.render(
  <PhoneNumberForm />,
  app
);
```
👏
In this example, the `PhoneNumberForm` component controls the `<input>` element by assigning its own `number` state value to the `value` attribute. Doing this essentially turns off the form element’s default behavior of controlling its own state. To keep the `number` state value up to date, an `onChange` handler is registered which can set the state value each time a change is detected.

With this approach, we are set up to perform immediate validation on every change to the form. In this case, we can make sure that only numbers are used in the form and that the form doesn’t exceed 10 characters in length (see `handleChange()`).

Though change-by-change validation like this is common enough, in some cases we may only care about a form’s value after it has been submitted. In these scenarios, keeping the input value up to date on every change can feel like overkill. This is where uncontrolled components come into play.

## Uncontrolled Components
An uncontrolled component is a form element that maintains its own state in the DOM. Rather than using a component’s own state value to maintain that element’s input value and updating it on every change, we can instead use a [ref](https://reactjs.org/docs/refs-and-the-dom.html) to retrieve the value directly from the DOM only when we need it.

According to React:

Refs provide a way to access DOM nodes or React elements created in the render method.

To create an uncontrolled component, we begin by creating a ref using the `React.createRef()` method. This method returns an object with a `.current` property that refers to the DOM node it is bound to. This ref object is bound to a form element using the `ref` attribute and whenever the value of that form element needs to be retrieved, simply refer back to the ref object’s `.current` property.

```
import ReactDOM from "react-dom";
import React from "react";

function PhoneNumberForm() {
  const numberRef = React.createRef();

  const handleSubmit = (e) => {
    e.preventDefault(); 
    
    const number = numberRef.current.value;

    if (!Number.isNaN(Number(number))) {
      alert('Error: Only numbers allowed.')
    }
    else if (number.length <= 10) {
      alert('Error: Number length exceeded 10 digits.')
    }
    else {
      alert(`Sending confirmation code to ${number}.`);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Phone Number:
        <input type="tel" ref={numberRef} />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}

const app = document.getElementById('app');

ReactDOM.render(
  <PhoneNumberForm />,
  app
);
```
Notice how we are still validating the incoming phone number but only after the form has been submitted.

In this example, the `numberRef` object is created and then bound to the `<input>` form element.
```
const numberRef = React.createRef();
 
// ...
 
<input type="text" ref={numberRef} />
```

In `handleSubmit`, the value of that form element can be retrieved from the DOM node stored in `numberRef.current`.
```
const number = numberRef.current.value;
```

Note: `<input>` DOM nodes are instances of [`HTMLInputElement`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement) so their values can be retrieved using the `.value` property. Other form elements may use different properties to access their input values.

## When Should You Use An Uncontrolled Component?
In some ways, creating uncontrolled components is faster and easier than creating controlled components. However, given their departure from the React pattern of storing mutable data in a component’s state, controlled components are still recommended for most scenarios.

There is one situation in which uncontrolled components must always be used: `<input>` form elements with the `type="file"` attribute. The value for this type of `<input`> form element can only be set by a user, and not programmatically, and therefore the only way to retrieve this value is through a ref.

In this example, we again create a ref using the `React.createRef()` method and then bind it to the `<input>` form element. The uploaded file is stored in the array-like [`FileList`](https://developer.mozilla.org/en-US/docs/Web/API/FileList) returned by `fileRef.current.files` and the `.size` property of this file is accessed when the user submits the form.

## Summary
At the top of React’s documentation for [uncontrolled components](https://reactjs.org/docs/uncontrolled-components.html) is a recommendation to use controlled components whenever possible. Not only do controlled components allow for change-by-change tracking of input form values, they better align with React’s pattern of storing mutable data in a component’s state.

That being said, there is a time and a place when using uncontrolled components has its advantages. If you only need access to the value of the form on submission or are using a `<input type='file'>` form element, then uncontrolled components can be a valuable tool to have in your React toolbelt.
# Child Components Update Their Parents' state

## 1. Child Components Update Their Parents' state

1. The parent component class defines a method that calls this.setState().
2. The parent component binds the newly-defined method to the current instance of the component in its constructor. This ensures that when we pass the method to the child component, it will still update the parent component.
3. Once the parent has defined a method that updates its state and bound to it, the parent then passes that method down to a child.
4. The child receives the passed-down function, and uses it as an event handler.

```
// ParentClass.js
import React from 'react';
import ReactDOM from 'react-dom';
import { ChildClass } from './ChildClass';

class ParentClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = { totalClicks: 0 };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const total = this.state.totalClicks;

    // calling handleClick will 
    // result in a state change:
    this.setState(
      { totalClicks: total + 1 }
    );
  }

  // The stateful component class passes down
  // handleClick to a stateless component class:
  render() {
    return (
      <ChildClass onClick={this.handleClick} />
    );
  }
}

// ChildClass.js
import React from 'react';
import ReactDOM from 'react-dom';

export class ChildClass extends React.Component {
  render() {
    return (
      // The stateless component class uses
      // the passed-down handleClick function,
      // accessed here as this.props.onClick,
      // as an event handler:
      <button onClick={this.props.onClick}>
        Click Me!
      </button>
    );
  }
}
```

## 2. Define an Event Handler
To make a child component update its parent’s state, the first step is to define a state-changing method on the parent.
```
changeName(newName) {
  this.setState({
    name: newName
  });
}
 
render() {
  // ...
}
```

## 3. Pass the Event Handler
`Parent` must pass this function down to `Child`, so that `Child` can use it in an event listener on the dropdown menu.

First make sure that the `.changeName()` method will always refer to the instance of `Parent`, even when we pass it down to `Child` to use.

In the constructor method of `Parent`, `bind` `this.changeName` to the current value of `this` and store it in `this.changeName`.
```
this.changeName = this.changeName.bind(this)
```

Second pass `.changeName()` down to `Child`. In **Parent.js**, inside of `Parent`‘s render function, add a second attribute to `<Child />`. Give this attribute a name of `onChange`, and a value of the `changeName` method.
```
return <Child name={this.state.name} onChange={this.changeName}/>
```

## 4. Receive the Event Handler

First define a new function that takes an event object as an argument, extract the name that you want from that event object, and then call the event handler, passing in the extracted name.
```
handleChange(e) {
  const name = e.target.value;
  this.props.onChange(name);
}
```

Second, bind `this` to our new method to the current instance of Child.
```
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
```

Lastly, inside of Child‘s render function, give `<select>` a new attribute.

Make the attribute’s name onChange. This will create an event listener.

Make the attribute’s value equal to the new function.
```
<select id="great-names" onChange={this.handleChange}>
```
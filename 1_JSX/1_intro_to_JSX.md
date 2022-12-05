# Intro to JSX

## 1. Why React?
React.js is a JavaScript library. It was developed by engineers at Facebook.

- React is fast. Apps made in React can handle complex updates and still feel quick and responsive.
- React is modular. Instead of writing large, dense files of code, you can write many smaller, reusable files. React’s modularity can be a beautiful solution to JavaScript’s maintainability problems.
- React is scalable. Large programs that display a lot of changing data are where React performs best.
- React is flexible. You can use React for interesting projects that have nothing to do with making a web app. People are still figuring out React’s potential. There’s room to explore.

## 2. Hello World
Take a look at the following line of code:
```
const h1 = <h1>Hello world</h1>;
```
It seems like it must be JavaScript, since it starts with `const` and ends with `;`.

However, the code also contains `<h1>Hello world</h1>`, which looks exactly like HTML.

## 3. The Mystery, Revealed
It is a JavaScript file. The code doesn’t actually contain any HTML at all.

The part that looks like HTML, `<h1>Hello world</h1>`, is something called *JSX*.

## 4. What is JSX?
JSX is a syntax extension for JavaScript. It was written to be used with React. JSX code looks a lot like HTML.

What does “syntax extension” mean?

In this case, it means that JSX is not valid JavaScript. Web browsers can’t read it!

If a JavaScript file contains JSX code, then that file will have to be compiled. That means that before the file reaches a web browser, a JSX compiler will translate any JSX into regular JavaScript.

## 5. JSX Elements
A basic unit of JSX is called a JSX element.

Here’s an example of a JSX element:
```
<h1>Hello world</h1>
<p>Hello world</p>
```
This JSX element looks exactly like HTML. The only noticeable difference is that you would find it in a JavaScript file, instead of in an HTML file.

## 6. JSX Elements And Their Surroundings
JSX elements are treated as JavaScript expressions. They can go anywhere that JavaScript expressions can go.

That means that a JSX element can be saved in a variable, passed to a function, stored in an object or array.

Here’s an example of a JSX element being saved in a variable:
```
const navBar = <nav>I am a nav bar</nav>;
```
```
const myArticle = <article></article>;
```
Here’s an example of several JSX elements being stored in an object:
```
const myTeam = {
  center: <li>Benzo Walli</li>,
  powerForward: <li>Rasha Loa</li>,
  smallForward: <li>Tayshaun Dasmoto</li>,
  shootingGuard: <li>Colmar Cumberbatch</li>,
  pointGuard: <li>Femi Billon</li>
};
```

## 7. Attributes In JSX
JSX elements can have *attributes*, just like HTML elements can.

A JSX attribute is written using HTML-like syntax: a *name*, followed by an equals sign, followed by a *value*. The *value* should be wrapped in quotes, like this:
```
my-attribute-name="my-attribute-value"
```
Here are some JSX elements with attributes:
```
<a href='http://www.example.com'>Welcome to the Web</a>;
 
const title = <h1 id='title'>Introduction to React.js: Part I</h1>; 
```
A single JSX element can have many attributes, just like in HTML:
```
const panda = <img src='images/panda.jpg' alt='panda' width='500px' height='500px' />;
```

Exercise
```
const p1 = <p id='large'>foo</p>;
const p2 = <p id='small'>bar</p>;
```

## 8 Nested JSX
You can nest JSX elements inside of other JSX elements, just like in HTML.

Here’s an example of a JSX `<h1>` element, nested inside of a JSX `<a>` element:
```
<a href="https://www.example.com"><h1>Click me!</h1></a>
```
To make this more readable, you can use HTML-style line breaks and indentation:
```
<a href="https://www.example.com">
  <h1>
    Click me!
  </h1>
</a>
```
If a JSX expression takes up more than one line, then you must wrap the multi-line JSX expression in parentheses. This looks strange at first, but you get used to it:
```
(
  <a href="https://www.example.com">
    <h1>
      Click me!
    </h1>
  </a>
)
```
Nested JSX expressions can be saved as variables, passed to functions, etc., just like non-nested JSX expressions can. Here’s an example of a nested JSX expression being saved as a variable:
```
 const theExample = (
   <a href="https://www.example.com">
     <h1>
       Click me!
     </h1>
   </a>
 );
```
Exercise
```
const myDiv = (
  <div>
    <h1>
      Hello world
    </h1>
  </div>
);
```
## 9. JSX Outer Elements
There’s a rule that we haven’t mentioned: a JSX expression must have exactly one outermost element.

In other words, this code will work:
```
const paragraphs = (
  <div id="i-am-the-outermost-element">
    <p>I am a paragraph.</p>
    <p>I, too, am a paragraph.</p>
  </div>
);
```
But this code will not work:
```
const paragraphs = (
  <p>I am a paragraph.</p> 
  <p>I, too, am a paragraph.</p>
);
```
The first opening tag and the final closing tag of a JSX expression must belong to the same JSX element!

It’s easy to forget about this rule, and end up with errors that are tough to diagnose.

If you notice that a JSX expression has multiple outer elements, the solution is usually simple: wrap the JSX expression in a `<div></div>`.

Exercise
```
const blog = (
  <div>
    <img src="pics/192940u73.jpg" />
    <h1>
      Welcome to Dan's Blog!
    </h1>
    <article>
      Wow I had the tastiest sandwich today.  I <strong>literally</strong> almost freaked out.
    </article>
  </div>
);
```
## 10 Rendering JSX
To render a JSX expression means to make it appear onscreen.

Exercise
```
import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(<h1>Hello world</h1>, document.getElementById('app'));
```

## 11. `ReactDOM.render()` I
```
ReactDOM.render(<h1>Render me!</h1>, document.getElementById('app'));
```
`ReactDOM` is the name of a JavaScript library. This library contains several React-specific methods, all of which deal with the [DOM](http://www.w3schools.com/js/js_htmldom.asp) in some way or another.

One of ReactDOM‘s methods is `ReactDOM.render()`. `ReactDOM.render()` is the most common way to render JSX. It takes a JSX expression, creates a corresponding tree of DOM nodes, and adds that tree to the DOM. That is the way to make a JSX expression appear onscreen.

`<h1>Render me!</h1>` is the first *argument* being passed to `ReactDOM.render()`. `ReactDOM.render()`‘s first argument should be a JSX expression, and it will be rendered to the screen.

Exercise
```
import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(<h1>Hello world</h1>, document.getElementById('app'));
```

## 12. `ReactDOM.render` II
```
document.getElementById('app')
```
The first argument `<h1>Hello world</h1>` is appended to whatever element is selected by the second argument `document.getElementById('app')`.

The element selected by `document.getElementById('app')` is found in index.html.

```
<main id="app">
  <h1>Render me!</h1>
</main>
```
That element acted as a container for `ReactDOM.render()`‘s first argument.

Exercise
```
// app.js
import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(<h1>Render me!</h1>, document.getElementById('container'));
```
```
<!-- index.html -->
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<link rel="stylesheet" href="/styles.css">
	<title>Learn ReactJS</title>
</head>

<body>
  <span id="container"></span>
  <script src="https://content.codecademy.com/courses/React/react-course-bundle.min.js"></script>
  <script src="/app.compiled.js"></script>
</body>

</html>
```

## 13. Passing a Variable to `ReactDOM.render()`
`ReactDOM.render()`‘s first argument should evaluate to a JSX expression, it doesn’t have to literally be a JSX expression.

The first argument could also be a variable, so long as that variable evaluates to a JSX expression.

In this example, we save a JSX expression as a variable named `toDoList`. We then pass `toDoList` as the first argument to `ReactDOM.render()`:
```
const toDoList = (
  <ol>
    <li>Learn React</li>
    <li>Become a Developer</li>
  </ol>
);
 
ReactDOM.render(
  toDoList, 
  document.getElementById('app')
);
```

Exercise
```
import React from 'react';
import ReactDOM from 'react-dom';

// Write code here:
const myList = (
  <ul>
    <li>Eat</li>
    <li>Sleep</li>
    <li>Code</li>
  </ul>
);

ReactDOM.render(
  myList,
  document.getElementById('app')
);
```

## 14. The Virtual DOM
One special thing about `ReactDOM.render()` is that it *only updates DOM elements that have changed*.

That means that if you render the exact same thing twice in a row, the second render will do nothing:
```
const hello = <h1>Hello world</h1>;
 
// This will add "Hello world" to the screen:
 
ReactDOM.render(hello, document.getElementById('app'));
 
// This won't do anything at all:
 
ReactDOM.render(hello, document.getElementById('app'));
```

This is significant. Only updating the necessary DOM elements is a large part of what makes React so successful.

React accomplishes this thanks to something called *the virtual DOM*. 

In React, for every [DOM](https://eloquentjavascript.net/14_dom.html) object, there is a corresponding “virtual DOM object.” A virtual DOM object is a *representation* of a DOM object, like a lightweight copy.

A virtual DOM object has the same properties as a real DOM object, but it lacks the real thing’s power to directly change what’s on the screen.

Manipulating the DOM is slow. Manipulating the virtual DOM is much faster, because nothing gets drawn onscreen. Think of manipulating the virtual DOM as editing a blueprint, as opposed to moving rooms in an actual house.

When you render a JSX element, every single virtual DOM object gets updated.

This sounds incredibly inefficient, but the cost is insignificant because the virtual DOM can update so quickly.

Once the virtual DOM has updated, then React compares the virtual DOM with a virtual DOM *snapshot* that was taken right before the update.

By comparing the new virtual DOM with a pre-update version, React figures out *exactly which virtual DOM objects have changed*. This process is called “diffing.”

Once React knows which virtual DOM objects have changed, then React updates those objects, *and only those objects*, on the real DOM. In our example from earlier, React would be smart enough to rebuild your one checked-off list-item, and leave the rest of your list alone.

This makes a big difference. React can update only the necessary parts of the DOM. React’s reputation for performance comes largely from this innovation.

In summary, here’s what happens when you try to update the DOM in React:

1. The entire virtual DOM gets updated.
2. The virtual DOM gets compared to what it looked like before you updated it. React figures out which objects have changed.
3. The changed objects, and the changed objects only, get updated on the real DOM.
4. Changes on the real DOM cause the screen to change.

More about the virtual DOM.

https://reactkungfu.com/2015/10/the-difference-between-virtual-dom-and-dom/
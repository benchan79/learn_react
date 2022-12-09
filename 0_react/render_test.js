const testConst = '1. testConst: this is a constant rendered with ReactDOM.render()'
const TestConst = '2. TestConst: this is a constant rendered with ReactDOM.render()'

function testFunc() {
  return '3. testFunc(): this is a function rendered with ReactDOM.render() by calling it with ()'
}
function TestFunc() {
  return '4. TestFunc(): this is a function rendered with ReactDOM.render() using < /> tags'
}

function testFunc2() {
  return '5. testFunc2(): this is a function rendered with ReactDOM.createRoot() and React.createElement()'
}

function TestFunc2() {
  return '6. TestFunc2(): this is a function rendered with ReactDOM.createRoot() and < /> tags'
}

const TestConst2 = '7. TestConst2: this is a constant rendered with ReactDOM.createRoot()'

ReactDOM.render(
	testConst,
	document.getElementById('app1')
);

ReactDOM.render(
	TestConst,
	document.getElementById('app2')
);

ReactDOM.render(
	testFunc(),
	document.getElementById('app3')
);

ReactDOM.render(
	<TestFunc />, // Need to start with uppercase
	document.getElementById('app4')
);

const rootNode = document.getElementById('app5');
const root = ReactDOM.createRoot(rootNode);
root.render(React.createElement(testFunc2));

const rootNode2 = document.getElementById('app6');
const root2 = ReactDOM.createRoot(rootNode2);
root2.render(<TestFunc2 />); // Need to start with uppercase

const rootNode3 = document.getElementById('app7');
const root3 = ReactDOM.createRoot(rootNode3);
root3.render(TestConst2);
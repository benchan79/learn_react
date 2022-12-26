import './App.css';
import { ParentClass } from './components/Parent';
import { ChangeNameParent } from './components/ChangeNameParent'
import { SiblingParent } from './components/SiblingParent'
import { Example } from './components/Logger';

function App() {
  return (
    <div className="App">
      <ParentClass/>
      <hr/>
      <ChangeNameParent/>
      <hr/>
      <SiblingParent/>
      <hr/>
      <Example/>
    </div>
  );
}

export default App;

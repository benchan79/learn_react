import './App.css';
import { PageTitleClass, PageTitleFunction } from "./components/Example.js"
import { Counter, Counter2 }  from "./components/Example"
import { DependencyArray, Timer }  from "./components/Example"
import { DependencyArray2 }  from "./components/Example"
import { Forecast }  from "./components/Example"
import { Shop } from "./components/Example"
import { CombinedHooks, SeparateHooks } from "./components/Example"
import { SocialNetworkCombined, SocialNetworkSeparate } from './components/SocialNetwork';
function App() {
  return (
    <div>
      <h1>The Hook Effect</h1>
      <h2>1. Why use useEffect?</h2>
      <hr />
      <PageTitleClass />
      <hr />
      <PageTitleFunction />
      <hr />
      <Counter />
      <hr />
      <Counter2 />
      <hr />
      <DependencyArray />
      <hr />
      <Timer />
      <hr />
      <DependencyArray2 />
      <hr />
      <Forecast />
      <hr />
      <Shop />
      <hr />
      <CombinedHooks />
      <hr />
      <SeparateHooks />
      <hr />
      <SocialNetworkCombined />
      <hr />
      <SocialNetworkSeparate />
      <hr />
    </div>
  );
}

export default App;

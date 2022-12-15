import './App.css';
import { MyComponentClass1, MyComponentClass2, Friend, AppFunction } from './components/Example';
import { YesNoQuestion, NewFriend } from './components/Example';
import { Toggle, ColorPicker } from './components/Example';
import { ToggleLoading, ColorPickerMore } from './components/Example';
import { EmailTextInput, PhoneNumber } from './components/Example';
import { Counter, QuizNavBar } from './components/Example';
import { questions } from "./components/dataModel";
import { PersonalPizza, GroceryCart } from "./components/Example"
import { Login, EditProfile } from "./components/Example"
import { SubjectRefactored } from "./components/Example"
import { AppClass } from "./components/Example"
function App() {
  return (
    <div>
      <MyComponentClass1 />
      <MyComponentClass2 />
      <Friend />
      <hr/>
      <YesNoQuestion prompt="Have you eaten an apple today?" />
      <NewFriend src="https://content.codecademy.com/courses/React/react_photo-squid.jpg" />
      <hr/>
      <h2>2. Update Function Component State</h2>
      <Toggle />
      <hr/>
      <ColorPicker />
      <hr/>
      <h2>3. Initialize State</h2>
      <ToggleLoading />
      <hr/>
      <ColorPickerMore />
      <hr/>
      <h2>4. Use State Setter Outside of JSX</h2>
      <EmailTextInput />
      <hr/>
      <PhoneNumber />
      <hr/>
      <h2>5. Set From Previous State</h2>
      <Counter />
      <hr/>
      <QuizNavBar questions={questions} />
      <hr/>
      <h2>6. Arrays in State</h2>
      <PersonalPizza />
      <hr/>
      <GroceryCart />
      <hr/>
      <h2>7. Objects in State</h2>
      <Login />
      <hr/>
      <EditProfile />
      <hr/>
      <SubjectRefactored />
      <hr/>
      <AppClass />
      <hr />
      <AppFunction />
      <hr />
    </div>
  );
}

export default App;


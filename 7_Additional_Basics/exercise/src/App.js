import './App.css';
import { styleMe } from './components/styles/StyleMe'
import { StyledClass } from './components/styles/StyledClass'
import { styleMe2 } from './components/styles/StyleMe2'
import { Wow } from './components/styles/FacebookColorThief'
import { Home } from './components/styles/Home'
import { GuineaPigsOriginal } from './components/separation/GuineaPigsOriginal'
import { GuineaPigsContainer } from './components/separation/containers/GuineaPigsContainer'
import { BookList } from './components/proptypes/BookList'
import { RunnerMain } from './components/proptypes/RunnerMain'
import { Input } from './components/forms/Input'
import { PhoneNumberForm } from './components/forms/PhoneNumberForm'
import { File } from './components/forms/File'
function App() {
  return (
    <div className="App">
      {styleMe}
      <hr/>
      <StyledClass />
      <hr />
      {styleMe2}
      <hr />
      <Wow />
      <hr />
      <Home />
      <hr/>
      <GuineaPigsOriginal/>
      <hr/>
      <GuineaPigsContainer />
      <hr/>
      <BookList/>
      <hr/>
      <RunnerMain />
      <hr/>
      <Input />
      <hr/>
      <PhoneNumberForm />
      <hr/>
      <File />
      <hr/>
      <hr/>
      <hr/>
      <hr/>
      <hr/>
    </div>
  );
}

export default App;

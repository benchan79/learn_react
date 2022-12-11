import React from 'react';
import ReactDOM from 'react-dom/client';
import ReactDOM2 from 'react-dom';
import './index.css';
import { ProfilePage } from './ProfilePage';
import { faveManifestos, alsoRan } from './Manifestos';
// import App from './App';

class OMG extends React.Component {
  render() {
    return <h1>Whooaa!</h1>;                                                
  }                                                     
}
 
class Crazy extends React.Component {
  render() {
    return <OMG />;
  }
}

const root1 = ReactDOM.createRoot(document.getElementById('root1'));
root1.render(
  <React.StrictMode>
    <Crazy />
  </React.StrictMode>
);
///////////////////////////////////////////////////////////////////////////


const root2 = ReactDOM.createRoot(document.getElementById('root2'));
root2.render(
  <React.StrictMode>
    <ProfilePage />
  </React.StrictMode>
);

console.log(`A Cyborg Manifesto:  ${faveManifestos.cyborg}`);
console.log(`Also Ran:  ${alsoRan}`);

class FaveManifestos extends React.Component {
  render() {
    return (
      <div>
        <p>A Cyborg Manifesto: {faveManifestos.cyborg} </p>
        <p>Also Ran: {alsoRan} </p>
      </div>
    );                                     
  }                                                     
}

const root3 = ReactDOM.createRoot(document.getElementById('root3'));
root3.render(
  <React.StrictMode>
       <FaveManifestos />
  </React.StrictMode>
);


ReactDOM2.render(<ProfilePage />, document.getElementById('root4'));

// const root4 = ReactDOM.createRoot(document.getElementById('root4'));
// root4.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
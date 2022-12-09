// import React from 'react';
// import ReactDOM from 'react-dom';

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: 'swordfish',
      authorized: false // check whether a user has entered the right password
    };
    this.authorize = this.authorize.bind(this);
  }

  authorize(e) {
    const password = e.target.querySelector(
      'input[type="password"]').value;
    const auth = password == this.state.password;
    this.setState({
      authorized: auth
    });
  }

  render() {

    const login = (
      // action determines what happens when you press submit
      // often leads to some PHP file that would process the data
      // but not needed here because the logic is all in the file
      // The octothorp # links to the page and prevents the user from being redirected
      // type="password" makes the field display dots instead of plain text
      // placeholder="Password" indicates to the user what kind of info to enter
      // submit buttom should have have attribute type set to submit
      // any method passed into the onSubmit attribute will run when the submit button is pressed
      <form action='#' onSubmit={this.authorize}> 
        <input 
          type="password" 
          placeholder="Password"/>
        <input type="submit" />
      </form>
    )

    const contactInfo = (
      <ul>
        <li>
          client@example.com
        </li>
        <li>
          555.555.5555
        </li>
      </ul>
    )

    return (
      <div id="authorization">
        <h1>{this.state.authorized ? 'Contact' : 'Enter the Password'}</h1>
        {this.state.authorized ? contactInfo : login}
      </div>
    );
  }
}

ReactDOM.render(
  <Contact />, 
  document.getElementById('app')
);
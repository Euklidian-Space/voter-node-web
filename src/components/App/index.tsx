import * as React from 'react';
import './App.css';
import LoginForm from '../LoginForm';

import logo from './logo.svg';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <LoginForm onSubmit={this.onSubmit} />
      </div>
    );
  }

  private onSubmit() {
    console.log("Login form Submitted!");
  }
}

export default App;

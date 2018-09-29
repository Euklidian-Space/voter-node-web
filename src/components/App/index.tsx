import * as React from 'react';
import './App.css';
// import LoginForm from '../LoginForm';

import logo from './logo.svg';
import RegisterForm from '../RegisterForm';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div style={styles.formContainer}>
          <RegisterForm onSubmit={this.onSubmit} />
        </div>
      </div>
    );
  }

  private onSubmit() {
    console.log("Login form Submitted!");
  }
}

const styles = {
  formContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }
};

export default App;

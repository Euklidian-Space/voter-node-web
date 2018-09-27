import * as React from 'react';
import { Button, TextField } from '@material-ui/core';

export interface ILoginForm {
  onSubmit: (arg: {email: string, password: string}) => void;
}

export interface ILoginFormState {
  email: string;
  password: string;
}

class LoginForm extends React.Component<ILoginForm, ILoginFormState> {
  private fieldProps: {email: object, password: object};

  constructor(props: ILoginForm) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };

    this.onClick = this.onClick.bind(this);
    this.onEmailFieldChange = this.onEmailFieldChange.bind(this);
    this.onPasswordFieldChange = this.onPasswordFieldChange.bind(this);

    this.fieldProps = {
      email: {
        name: "email",
        onChange: this.onEmailFieldChange,
        placeholder: "email"
      },
      password: {
        inputProps: {
          type: "password"
        },
        name: "password",
        onChange: this.onPasswordFieldChange,
        placeholder: "password"
      }
    }; 
  }
 
  public render() {
    const { containerStyle, buttonStyle } = styles;
    const { fieldProps } = this;
    return (
      <form style={containerStyle}>
        <TextField {...fieldProps.email}/>
        <TextField {...fieldProps.password}/>
        <Button style={buttonStyle} onClick={this.onClick} >
          Login
        </Button>
      </form>
    );
  }

  private onPasswordFieldChange(evt: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ password: evt.currentTarget.value });
  }

  private onEmailFieldChange(evt: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ email: evt.currentTarget.value });
  }

  private onClick() {
    const { email, password } = this.state;
    this.props.onSubmit({email, password});
  }
}

const styles = {

  buttonStyle: {
    marginTop: 10
  } as React.CSSProperties,

  containerStyle: {
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    width: 450
  } as React.CSSProperties

};

export default LoginForm;
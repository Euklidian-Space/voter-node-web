import * as React from 'react';
import { Button, TextField } from '@material-ui/core';
const Component = React.Component;

interface IRegisterForm {
  onSubmit: (arg: {
    email: string, 
    password: string, 
    confirmPassword: string}) => void;
}

interface IRegisterFormState {
  email: string;
  password: string;
  confirmPassword: string;
}

class RegisterForm extends Component<IRegisterForm, IRegisterFormState> {
  private fieldProps: { 
    email: object, 
    password: object, 
    confirmPassword: object
  };

  constructor(props: IRegisterForm) {
    super(props);
    this.state = {
      email: '',
      password: '',
      confirmPassword: ''
    };

    this.onClick = this.onClick.bind(this);    
    this.onChange = this.onChange.bind(this);

    this.fieldProps = {
      email: {
        name: "email",
        onChange: this.onChange("email"),
        placeholder: "email"
      },
      password: {
        inputProps: {
          type: "password"
        },
        name: "password",
        onChange: this.onChange("password"),
        placeholder: "password"
      },
      confirmPassword: {
        inputProps: {
          type: "password"
        },
        onChange: this.onChange("confirmPassword"),
        placeholder: "confirm password"
      }
    };
  }

  public render() {
    const { fieldProps } = this;
    const { containerStyle, buttonStyle } = styles;
    return (
      <form style={containerStyle}>
        <TextField {...fieldProps.email}/>

        <TextField {...fieldProps.password}/>

        <TextField {...fieldProps.confirmPassword}/>

        <Button style={buttonStyle} onClick={this.onClick}>
          Register
        </Button>
      </form>
    );
  }

  private onChange(field: string) {
    switch (field) {
      case "email":
        return (evt: React.ChangeEvent<HTMLInputElement>) => {
          this.setState({email: evt.currentTarget.value});
        };
      case "password":
        return (evt: React.ChangeEvent<HTMLInputElement>) => {
          this.setState({password: evt.currentTarget.value});
        };
      default:
        return (evt: React.ChangeEvent<HTMLInputElement>) => {
          this.setState({confirmPassword: evt.currentTarget.value});
        };
    } 
  }

  private onClick() {
    this.props.onSubmit(this.state);
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
 
export default RegisterForm;
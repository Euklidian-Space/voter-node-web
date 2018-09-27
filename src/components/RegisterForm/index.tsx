import * as React from 'react';
import { Button, TextField } from '@material-ui/core';
const Component = React.Component;

export interface IRegisterForm {
  onSubmit: (arg: {
    confirmPassword: string,
    email: string, 
    password: string}) => void;
}

export interface IRegisterFormState {
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
      confirmPassword: '',
      email: '',
      password: ''
    };

    this.onClick = this.onClick.bind(this);    
    this.onChange = this.onChange.bind(this);

    this.fieldProps = {
      confirmPassword: {
        inputProps: {
          type: "password"
        },
        onChange: this.onChange("confirmPassword"),
        placeholder: "confirm password"
      },
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
      }
    };
  }

  public render() {
    const { containerStyle, buttonStyle } = styles;
    return (
      <form style={containerStyle}>
        {this.renderTextFields()}
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

  private renderTextFields() {
    const { fieldProps } = this;
    const errorState = {
      error: true,
      label: "must match password field"
    };
    let confirmPasswordProps = fieldProps.confirmPassword;
    if (this.state.password !== this.state.confirmPassword) {
      confirmPasswordProps = Object.assign(errorState, confirmPasswordProps);
    }

    return (
      <div>
        <TextField style={styles.fieldStyle} {...fieldProps.email}/>
        <TextField style={styles.fieldStyle} {...fieldProps.password}/>
        <TextField style={styles.fieldStyle} {...confirmPasswordProps} />
      </div>
    );
  }
}

const styles = {

  fieldStyle: {
    flex: 1,
    marginTop: 10
  } as React.CSSProperties,

  buttonStyle: {
    marginTop: 10,
    flex: 1,
    alignSelf: "flex-start",
    marginLeft: 35
  } as React.CSSProperties,

  containerStyle: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: 300
  } as React.CSSProperties

};
 
export default RegisterForm;
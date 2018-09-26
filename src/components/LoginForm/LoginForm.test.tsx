import * as React from 'react';
import { shallow, mount } from 'enzyme';
import LoginForm from './';


describe('LoginForm', () => {
  let props = {
    onSubmit: jest.fn()
  };
  let wrapper = shallow(<LoginForm {...props}/>);

  beforeEach(() => {
    props = {
      onSubmit: jest.fn()
    };
    wrapper = shallow(<LoginForm {...props}/>);
  });

  it('renders without crashing', () => {
    expect(wrapper).toBeDefined();
  });

  it('should have a form', () => {
    expect(wrapper.find('form').length).toBe(1);
  });

  it('should call onSubmit property', () => {
    const mountedWrapper = mount(<LoginForm {...props} />);
    const button = mountedWrapper.find('button');
    button.simulate('click');
    expect(props.onSubmit).toHaveBeenCalled();
  });

  it('should have two input fields', () => {
    const mountedWrapper = mount(<LoginForm {...props} />);
    expect(mountedWrapper.find('input').length).toBe(2);
  });

  it('should call onSubmit with {email: string, password: string}', () => {
    const mountedWrapper = mount(<LoginForm {...props} />);
    const button = mountedWrapper.find('button');
    button.simulate('click');
    expect(props.onSubmit).toHaveBeenCalledWith({
      email: '',
      password: ''
    });
  });

  it('should call onSubmit with {email: john@ex.com, password: password}', () => {
    const mountedWrapper = mount(<LoginForm {...props} />);
    const button = mountedWrapper.find('button');
    const expectedEmail = "john@ex.com";
    const expectedPassword = "password";

    mountedWrapper.setState({
      email: "john@ex.com",
      password: "password"
    });

    button.simulate('click');
    expect(props.onSubmit).toHaveBeenCalledWith({
      email: expectedEmail,
      password: expectedPassword
    });
  });

});
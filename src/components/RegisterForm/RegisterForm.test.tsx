import * as React from 'react';
import { shallow, mount } from 'enzyme';
import RegisterForm from './';

describe('RegisterForm', () => {
  let props = {
    onSubmit: jest.fn()
  };
  let wrapper = shallow(<RegisterForm {...props} />);
  beforeEach(() => {
    props = {
      onSubmit: jest.fn()
    };
    wrapper = shallow(<RegisterForm {...props} />);
  });

  it('renders without crashing', () => {
    expect(wrapper).toBeTruthy();  
  });

  it('should have a form', () => {
    expect(wrapper.find('form').length).toBe(1);
  });

  it('should call obSubmit property', () => {
    const mountedWrapper = mount(<RegisterForm {...props}/>);
    mountedWrapper.find('button').simulate('click');
    expect(props.onSubmit).toHaveBeenCalled();
  });

  it('should have three input fields', () => {
    const mountedWrapper = mount(<RegisterForm {...props} />);
    expect(mountedWrapper.find('TextField').length).toBe(3);
  });

  it('should call obSubmit with field values', () => {
    const mountedWrapper = mount(<RegisterForm {...props} />);
    const expected = {
      email: "john@ex.com",
      password: "password",
      confirmPassword: "password"
    };

    mountedWrapper.setState({
      email: "john@ex.com",
      password: "password",
      confirmPassword: "password"
    });

    mountedWrapper.find('button').simulate('click');
    expect(props.onSubmit).toHaveBeenCalledWith(expected);
  });
});
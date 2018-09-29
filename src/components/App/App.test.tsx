import * as React from 'react';
import * as ReactDOM from 'react-dom';
// import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { createStore, Store as ReduxStore } from 'redux';
import App from './';
import { Store } from "../../reducers/store";
import reducers from '../../reducers';
const store: ReduxStore<Store.All> = createStore(reducers);

it('renders without crashing', () => {
  const div = document.createElement('div');
  const WrappedApp = (
    <Provider store={store} >
      <App /> 
    </Provider>
  );
  ReactDOM.render(WrappedApp, div);
  ReactDOM.unmountComponentAtNode(div);
});

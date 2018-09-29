import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, Store as ReduxStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import App from './components/App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import reducers from './reducers';
import { Store } from './reducers/store';

const store: ReduxStore<Store.All> = createStore(
  reducers,
  {} as Store.All,
  applyMiddleware(thunk)
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
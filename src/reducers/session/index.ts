import { TypeKeys, Action } from '../../actions/types';
import { Store } from '../store';

const initialState: Store.Session = {
  willRegister: false
};

function sessionReducer(s: Store.Session = initialState, action: Action): Store.Session {
  switch (action.type) {
    case TypeKeys.REGISTRATION_REQUEST:
      return Object.assign(s, { willRegister: true });
    default:
      return s;
  }
}

export default sessionReducer;
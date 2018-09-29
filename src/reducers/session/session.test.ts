import reducer from './';
import { Store } from '../store';
import { Action, TypeKeys } from "../../actions/types";

describe("SessionReducer", () => {
  describe('REGISTRATION_REQUEST', () => {
    let state: Store.Session;
    beforeEach(() => {
      state = {
        willRegister: false
      };
    });

    it('should change willRegister to true', () => {
      let action: Action = { type: TypeKeys.REGISTRATION_REQUEST };
      expect(reducer(state, action)).toEqual({
        willRegister: true
      });
    });

    it('should return given state', () => {
      let action: Action = { type: TypeKeys.OTHER_ACTION };
      expect(reducer(state, action)).toBe(state);
    });
  });
});
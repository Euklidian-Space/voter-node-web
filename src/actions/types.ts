export enum TypeKeys {
  REGISTRATION_REQUEST = "REGISTRATION_REQUEST",
  OTHER_ACTION = "__any_other_action_type"
}

export interface RegisterAction {
  type: TypeKeys.REGISTRATION_REQUEST
}

export interface OtherAction {
  type: TypeKeys.OTHER_ACTION
}

export type Action = RegisterAction | OtherAction;

export type Dispatch = (action: Action) => void;

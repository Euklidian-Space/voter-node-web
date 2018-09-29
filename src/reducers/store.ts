export namespace Store {
  export type Session = {
    readonly willRegister: Boolean
  }

  export type All = {
    session: Session
  }
}
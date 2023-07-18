export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}
export enum UserActionTypes {
  USER_SET_USER = 'USER_SET_USER',
}

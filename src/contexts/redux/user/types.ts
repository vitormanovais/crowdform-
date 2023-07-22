export interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export interface FakeLogin {
  userLogged: User | null;
  accounts: {
    users: User[];
    totalAccounts: 1;
  };
}

export enum UserActionTypes {
  USER_SIGN_UP = 'USER_SIGN_UP',
  USER_LOGIN = 'USER_LOGIN',
}

export const initialValues: FakeLogin = {
  userLogged: null,
  accounts: {
    totalAccounts: 1,
    users: [
      {
        id: 0,
        firstName: 'Jhon',
        lastName: 'Snow',
        email: 'jhon@snow.com',
        password: 'winteriscoming',
      },
    ],
  },
};

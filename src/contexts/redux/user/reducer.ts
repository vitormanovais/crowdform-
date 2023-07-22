import {FakeLogin, User, UserActionTypes, initialValues} from './types';

const userReducer = (state: FakeLogin = initialValues, action: any) => {
  switch (action.type) {
    case UserActionTypes.USER_SIGN_UP:
      const {firstName, lastName, email, password} = action.payload;
      const newUser: User = {
        id: state.accounts.totalAccounts,
        firstName,
        lastName,
        email,
        password,
      };
      return {
        ...state,
        accounts: {
          ...state.accounts,
          totalAccounts: state.accounts.totalAccounts + 1,
          users: [...state.accounts.users, newUser],
        },
      };
    case UserActionTypes.USER_LOGIN:
      return {
        ...state,
        userLogged: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;

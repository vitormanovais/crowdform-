import {User, UserActionTypes} from './types';

const signUp = ({
  firstName,
  lastName,
  email,
  password,
}: {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}) => ({
  type: UserActionTypes.USER_LOGIN,
  payload: {firstName, lastName, email, password},
});
const login = (user: User) => ({
  type: UserActionTypes.USER_LOGIN,
  payload: {user},
});

export default {
  login,
  signUp,
};

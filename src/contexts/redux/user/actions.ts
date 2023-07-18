import {User, UserActionTypes} from './types';

export const setUser = (user: User) => ({
  type: UserActionTypes.USER_SET_USER,
  payload: user,
});

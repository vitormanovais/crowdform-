import {User, UserActionTypes} from './types';

const initialState: User | null = null;

const userReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case UserActionTypes.USER_SET_USER:
      return action.payload;
    default:
      return state;
  }
};

export default userReducer;

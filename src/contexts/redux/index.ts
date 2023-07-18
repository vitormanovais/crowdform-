import {combineReducers, configureStore} from '@reduxjs/toolkit';

import userReducer from './user/reducer';
import portfolioReducer from './portfolio/reducer';

const rootReducer = combineReducers({
  user: userReducer,
  portfolio: portfolioReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;

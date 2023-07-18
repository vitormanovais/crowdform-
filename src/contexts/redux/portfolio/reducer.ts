import {Portfolio, PortfolioActionTypes} from './types';

const initialState: Portfolio = {};

const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case PortfolioActionTypes.PORTFOLIO_SET_PORTFOLIO:
      return {...state, portfolio: action.payload};
    default:
      return state;
  }
};

export default reducer;

import {Portfolio, PortfolioActionTypes} from './types';

export const setPortfolio = (portfolio: Portfolio) => ({
  type: PortfolioActionTypes.PORTFOLIO_SET_PORTFOLIO,
  payload: portfolio,
});

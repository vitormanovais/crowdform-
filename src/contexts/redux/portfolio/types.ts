export interface Fund {
  portfolioId: string;
  name: string;
  value: number;
}

export interface Portfolio {
  totalValue?: number;
  funds?: Fund[];
}

export enum PortfolioActionTypes {
  PORTFOLIO_SET_PORTFOLIO = 'PORTFOLIO_SET_PORTFOLIO',
}

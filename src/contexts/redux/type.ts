import {Portfolio} from './portfolio/types';
import {FakeLogin} from './user/types';

export interface ReduxType {
  user: FakeLogin;
  portfolio: Portfolio;
}

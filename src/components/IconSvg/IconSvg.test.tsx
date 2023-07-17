import React from 'react';
import {render} from '@testing-library/react-native';
import IconSvg from './index';

test('renders header svg component', () => {
  const text = 'Testing header component';
  const {getByText} = render(<IconSvg name="openedEye" />);

  const headerText = getByText(text);
  expect(headerText).toBeTruthy();
});

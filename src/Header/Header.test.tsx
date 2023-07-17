import React from 'react';
import {render} from '@testing-library/react-native';
import HeaderT from './index';

test('renders header component with provided text', () => {
  const text = 'Hello, World!';
  const {getByText} = render(<HeaderT text={text} />);

  const headerText = getByText(text);
  expect(headerText).toBeTruthy();
});

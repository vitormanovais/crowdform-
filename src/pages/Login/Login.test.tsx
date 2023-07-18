import React from 'react';
import {render} from '@testing-library/react-native';
import Login from './Login';

describe('Login screen', () => {
  test('renders the login form correctly', () => {
    const {getByText} = render(<Login />);

    const emailLabel = getByText('E-mail');
    const emailInput = getByText('Password');

    expect(emailLabel).toBeDefined();
    expect(emailInput).toBeDefined();
  });
});

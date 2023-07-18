import React from 'react';
import {render} from '@testing-library/react-native';
import Login from './SignUp';

describe('Login screen', () => {
  test('renders the login form correctly', () => {
    const {getByText} = render(<Login />);

    const firstNameLabel = getByText('First Name');
    const lastNameInput = getByText('Last Name');
    const emailLabel = getByText('E-mail');
    const passwordInput = getByText('Password');

    expect(firstNameLabel).toBeDefined();
    expect(lastNameInput).toBeDefined();
    expect(emailLabel).toBeDefined();
    expect(passwordInput).toBeDefined();
  });
});

import React from 'react';
import Login from './Login';
import {fireEvent, render, waitFor, act} from '@testing-library/react-native';

const mockNavigate = jest.fn();

jest.mock('@react-navigation/native', () => ({
  useNavigation: () => ({
    navigate: mockNavigate,
  }),
}));

const setup = () => {
  return render(<Login />);
};

describe('Login screen', () => {
  test('navigation to SignUp page when clicking on the signup link', async () => {
    const {getByText} = setup();

    act(() => {
      fireEvent.press(getByText('Sign up here'));
    });

    await waitFor(() => {
      expect(mockNavigate).toBeCalled();
    });
  });

  test('validation for invalid email', async () => {
    const {getByPlaceholderText, getByTestId, findByPlaceholderText} = setup();

    act(() => {
      fireEvent.changeText(
        getByPlaceholderText('example@mail.com'),
        'invalidemail',
      );
    });
    act(() => {
      fireEvent.press(getByTestId('loginButton'));
    });

    await waitFor(() => {
      expect(findByPlaceholderText('Invalid email')).toBeTruthy();
    });
  });

  test('validation for invalid password', async () => {
    const {getByPlaceholderText, getByTestId, findByPlaceholderText} = setup();

    act(() => {
      fireEvent.changeText(
        getByPlaceholderText('Minimum 8 characters'),
        '1234567',
      );
    });
    act(() => {
      fireEvent.press(getByTestId('loginButton'));
    });

    await waitFor(() => {
      expect(findByPlaceholderText('Invalid password')).toBeTruthy();
    });
  });

  test('successful login', () => {
    const {getByTestId, getByPlaceholderText} = setup();

    act(() => {
      fireEvent.changeText(
        getByPlaceholderText('example@mail.com'),
        'email@example.com',
      );
    });
    act(() => {
      fireEvent.changeText(
        getByPlaceholderText('Minimum 8 characters'),
        'password',
      );
    });
    act(() => {
      fireEvent.press(getByTestId('loginButton'));
    });

    expect(mockNavigate).toHaveBeenCalledWith('SignUp');
  });
});

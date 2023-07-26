import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {Formik, FormikProps} from 'formik';
import InputField from '../../components/InputField';
import {LoginValues} from './types';
import Button from '../../components/Button';
import Header from '../../components/Header';
import {StyledContainer, StyledTextError} from './LoginStyles';
import {useNavigation} from '@react-navigation/native';
import PhraseWithLink from '../../components/PhraseWithLink/PhraseWithLink';
import {useDispatch, useSelector} from 'react-redux';
import userActions from '../../contexts/redux/user/actions';
import {ReduxType} from '../../contexts/redux/type';
import {User} from '../../contexts/redux/user/types';

const Login: React.FC = () => {
  const {users} = useSelector((state: ReduxType) => state.user.accounts);
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const [logingError, setLogingError] = useState<string | false>(false);

  console.log(users);

  const handleLogin = (values: LoginValues) => {
    const hasUser = users.find(
      (account: User) => account.email === values.email,
    );
    if (hasUser) {
      if (hasUser.password === values.password) {
        dispatch(userActions.login(hasUser));
        console.log('userLogged', hasUser);
      } else {
        setLogingError('Wrong password');
      }
    } else {
      setLogingError('User not found');
    }
  };

  const validade = (values: LoginValues) => {
    const errors: Partial<LoginValues> = {};

    if (!values.email) {
      errors.email = 'Please insert your email';
    }

    if (!values.password) {
      errors.password = 'Please insert your password';
    }

    return errors;
  };

  return (
    <StyledContainer>
      <Header text="Login" />
      <Formik
        initialValues={{email: '', password: ''}}
        onSubmit={handleLogin}
        validate={validade}>
        {({
          handleChange,
          handleSubmit,
          values,
          errors,
        }: FormikProps<LoginValues>) => (
          <>
            <InputField
              error={errors.email}
              label="E-mail"
              placeholder="example@mail.com"
              keyboardType="email-address"
              value={values.email}
              onChange={handleChange('email')}
            />
            <InputField
              error={errors.password}
              label="Password"
              placeholder="Minimum 8 characters"
              value={values.password}
              password
              onChange={handleChange('password')}
            />
            <Button title="Login" onPress={handleSubmit} testId="loginButton" />
            <PhraseWithLink
              text={'Don’t have an account? Sign up here'}
              tagAction={'Sign up here'}
              onPress={() => navigation.navigate('SignUp')}
            />
            {logingError && <StyledTextError>{logingError}</StyledTextError>}
          </>
        )}
      </Formik>
    </StyledContainer>
  );
};

export default Login;

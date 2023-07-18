import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Formik, FormikProps} from 'formik';
import InputField from '../../components/InputField';
import {LoginValues} from './types';
import Button from '../../components/Button';
import Header from '../../components/Header';
import {StyledContainer} from './LoginStyles';
import {useNavigation} from '@react-navigation/native';
import PhraseWithLink from '../../components/PhraseWithLink/PhraseWithLink';

const Login: React.FC = () => {
  const navigation = useNavigation();

  const handleLogin = (values: LoginValues) => {
    console.log('Login realizado com sucesso!', values);
    navigation.navigate('SignUp');
  };

  const validade = (values: LoginValues) => {
    const errors: Partial<LoginValues> = {};

    if (!values.email) {
      errors.email = 'Invalid email';
    }

    if (!values.password) {
      errors.password = 'Invalid password';
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
          </>
        )}
      </Formik>
    </StyledContainer>
  );
};

export default Login;

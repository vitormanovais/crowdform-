import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Formik, FormikProps} from 'formik';
import InputField from '../../components/InputField';
import {LoginValues} from './types';
import Button from '../../components/Button';
import Header from '../../components/Header';

const Login: React.FC = () => {
  const handleLogin = (values: LoginValues) => {
    console.log('Login realizado com sucesso!', values);
  };

  const validade = (values: LoginValues) => {
    const errors: Partial<LoginValues> = {};

    if (!values.email) {
      errors.email = 'Required field';
    }

    if (!values.password) {
      errors.password = 'Required field';
    }

    return errors;
  };

  return (
    <View style={styles.container}>
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
              error={!!errors.email}
              label="E-mail"
              placeholder="example@mail.com"
              keyboardType="email-address"
              value={values.email}
              onChange={handleChange('email')}
            />
            <InputField
              error={!!errors.password}
              label="Password"
              placeholder="Minimum 8 characters"
              value={values.password}
              password
              onChange={handleChange('password')}
            />
            <Button
              title="Login"
              onPress={handleSubmit}
              disabled={Object.keys(errors).length > 0}
            />
          </>
        )}
      </Formik>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 4,
    marginBottom: 16,
    paddingLeft: 10,
  },
  errorText: {
    color: 'red',
    marginBottom: 8,
  },
});

export default Login;

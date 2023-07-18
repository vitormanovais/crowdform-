import React from 'react';
import {ScrollView} from 'react-native';
import {Formik, FormikProps} from 'formik';
import InputField from '../../components/InputField';
import {LoginValues, initialValues} from './types';
import Button from '../../components/Button';
import Header from '../../components/Header';
import {StyledContainer} from './SignUpStyles';

const SignUp: React.FC = () => {
  const handleLogin = (values: LoginValues) => {
    console.log('Login realizado com sucesso!', values);
  };

  const validade = (values: LoginValues) => {
    const errors: Partial<LoginValues> = {};

    if (!values.firstName) {
      errors.firstName = 'Invalid name';
    }
    if (!values.lastName) {
      errors.lastName = 'Invalid last name';
    }
    if (!values.email) {
      errors.email = 'Invalid email';
    }
    if (!values.password) {
      errors.password = 'Invalid password';
    }
    if (!values.termsAndPrivacy) {
      errors.termsAndPrivacy = false;
    }

    return errors;
  };

  return (
    <ScrollView>
      <StyledContainer>
        <Header text="Create your account" />
        <Formik
          initialValues={initialValues}
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
                error={errors.firstName}
                label="First Name"
                placeholder="name"
                value={values.firstName}
                onChange={handleChange('firstName')}
              />
              <InputField
                error={errors.lastName}
                label="Last Name"
                placeholder="last name"
                value={values.lastName}
                onChange={handleChange('lastName')}
              />
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
              <Button
                title="Create account"
                onPress={handleSubmit}
                disabled={Object.keys(errors).length > 0}
              />
            </>
          )}
        </Formik>
      </StyledContainer>
    </ScrollView>
  );
};

export default SignUp;

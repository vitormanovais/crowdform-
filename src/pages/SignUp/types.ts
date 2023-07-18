export interface LoginValues {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    termsAndPrivacy: boolean;
  }
export const initialValues = {
  firstName: '',
    lastName: '',
    email: '',
    password: '',
    termsAndPrivacy: false,
}
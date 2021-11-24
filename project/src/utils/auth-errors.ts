const EMPTY_EMAIL_MESSAGE = 'Please enter a valid email address';
const EMPTY_PASSWORD_MESSAGE = 'We can’t recognize this email and password combination. Please try again.';

export const getLoginError = (email: string, password: string): string => {

  if (email === '') {
    return EMPTY_EMAIL_MESSAGE;
  }

  return EMPTY_PASSWORD_MESSAGE;

};

export const AUTH_USER_EXIST = 'User with this email exists';
export const AUTH_USER_NOT_FOUND = 'User not found';
export const AUTH_USER_PASSWORD_WRONG = 'User password is wrong';


export const AuthenticationMessages = {
  LoggedSuccess: 'User has been successfully logged.',
  LoggedError: 'Password or Login is wrong.',
  UserFound: 'User found',
  UserNotFound: 'User not found',
  UserExist: 'User with the email already exists',
  UserCreated: 'The new user has been successfully created.',
} as const;

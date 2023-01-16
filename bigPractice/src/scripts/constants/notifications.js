const API_ERROR_MESSAGES = {
  GET_API: 'Get API failed',
  ADD_USER: 'Add new user failed',
  UPDATE_USER: 'Update user failed',
  DELETE_USER: 'Delete user failed',
};

const VALIDATE__NAME__MESSAGES = {
  INVALID__NAME__EMPTY: 'Username is empty !',
  INVALID__NAME__LONG: 'Username too long, limit 30 characters',
  INVALID__NAME__SYNTAX: 'Syntax invalid',
};

const VALIDATE__EMAIL__MESSAGES = {
  INVALID__EMAIL__EMPTY: 'Email is empty !',
  INVALID__EMAIL__SYNTAX: 'Email address wrong format',
};

export { API_ERROR_MESSAGES, VALIDATE__NAME__MESSAGES, VALIDATE__EMAIL__MESSAGES };

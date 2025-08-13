// utils/validateRegister.js
import validator from'validator';

const validateRegisterInput = ({ name, email, password }) => {
  const errors = {};

  if (!name || !email || !password) {
    errors.message = 'All fields are required';
    return { errors, isValid: false };
  }

  if (!validator.isEmail(email)) {
    errors.email = 'Invalid email format';
  }

  if (!validator.isStrongPassword(password, {
    minLength: 6,
    minNumbers: 1,
    minSymbols: 0,
    minLowercase: 1,
  })) {
    errors.password = 'Password must be at least 6 characters and contain a number and a lowercase letter';
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0,
  };
};

export default validateRegisterInput;

import validator from 'validator';

const validateLoginInput = ({ email, password }) => {
  const errors = {};

  if (!email || !password) {
    errors.message = 'Email and Password are required';
    return { errors, isValid: false };
  }

  if (!validator.isEmail(email)) {
    errors.email = 'Invalid email format';
  }

  if (password.length < 6) {
    errors.password = 'Password must be at least 6 characters';
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0,
  };
};

export default validateLoginInput;

import validator from "validator";

const validateClientInput = (data) => {
  let errors = {};

  // Name (required)
  if (!data.name || validator.isEmpty(data.name.trim())) {
    errors.name = "Client name is required";
  }

  // Email (optional but must be valid)
  if (data.email && !validator.isEmail(data.email.trim())) {
    errors.email = "Email is invalid";
  }

  // Phone (optional, validate if present)
  if (data.phone && !validator.matches(data.phone, /^[+\d][\d\s-]{7,15}$/)) {
    errors.phone = "Phone number is invalid";
  }

  // Company (optional, 2–100 chars if provided)
  if (data.company && !validator.isLength(data.company.trim(), { min: 2, max: 100 })) {
    errors.company = "Company name must be 2–100 characters";
  }

  // Notes (optional)
  if (data.notes && data.notes.length > 500) {
    errors.notes = "Notes must be under 500 characters";
  }
  if(!data.status){
    errors.status="Status is required";
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0
  };
};

export default validateClientInput;

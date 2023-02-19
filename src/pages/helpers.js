export const validateRegistrationForm = (input) => {
  const errors = [];
  if (!input.firstName) {
    errors.push("First name is required");
  } else if (input.firstName.length < 3) {
    errors.push("First name should have minimum 3 characters.");
  } else if (input.firstName.length > 25) {
    errors.push("First name should not exceed 25 characters.");
  }

  if (!input.lastName) {
    errors.push("Last name is required");
  } else if (input.lastName.length < 3) {
    errors.push("Last name should have minimum 3 characters.");
  } else if (input.lastName.length > 25) {
    errors.push("Last name should not exceed 25 characters.");
  }

  if (!input.gender) {
    errors.push("Gender is required");
  } else if (!["M", "F", "O"].includes(input.gender)) {
    errors.push("Invalid gender is selected");
  }

  if (!input.mobileNo) {
    errors.push("Mobile number is required");
  } else if (input.mobileNo.length !== 10) {
    errors.push("Invalid mobile number");
  }

  if (!input.emailId) {
    errors.push("Please enter valid email id.");
  }

  if (!input.password) {
    errors.push("Password field is required");
  } else if (input.password.length < 6 || input.password.length > 20) {
    errors.push("Password length should be in between 6 and 20");
  }

  if (!input.confirmPassword) {
    errors.push("Please confirm the password");
  } else if (input.password !== input.confirmPassword) {
    errors.push("Passwords do not match");
  }

  return errors;
};

export const validateLoginForm = (input) => {
  const errors = [];
  if (!input.emailId) {
    errors.push("Please enter valid email id.");
  }
  if (!input.password) {
    errors.push("Password field is required");
  }
  return errors;
};

export const validateCalculatorForm = (input) => {
  const errors = [];
  return errors;
};

export const validateLoanForm = (input) => {
  const errors = [];
  return errors;
};

export const validateApplyForm = (input) => {
  const errors = [];
  return errors;
};

export function emiCalculator(principle, interestRate = 11, time) {
  if (!principle || !time) return 0;
  interestRate = interestRate / (12 * 100);
  let emi =
    (principle * interestRate * Math.pow(1 + interestRate, time)) /
    (Math.pow(1 + interestRate, time) - 1);
  return !isNaN(emi) && isFinite(emi) ? Math.ceil(emi + 0.000414) : 0;
}

export function convertToCurrency(number = 0) {
  return number.toLocaleString("en-IN", {
    maximumFractionDigits: 2,
    style: "currency",
    currency: "INR",
  });
}

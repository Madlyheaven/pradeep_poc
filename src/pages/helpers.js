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
  if (!input.fatherName) {
    errors.push("Full Name is required");
  } else if (input.fatherName.length < 3) {
    errors.push("Full name should have minimum 3 characters.");
  } else if (input.fatherName.length > 25) {
    errors.push("Full name should not exceed 25 characters.");
  }

  if (!input.dob) {
    errors.push("Date of birth is required");
  } else if (
    new Date(input.dob) === "Invalid Date" ||
    isNaN(new Date(input.dob))
  ) {
    errors.push("Invalid Date of birth");
  }

  if (!input.aadhar) {
    errors.push("Aadhar number must be 12 digits");
  } else if (input.aadhar.length !== 12) {
    errors.push("Invalid Aadhar number");
  }

  if (!input.courseName) {
    errors.push("Course Name is required");
  } else if (input.courseName.length < 3) {
    errors.push("Course Name should have minimum 3 characters.");
  } else if (input.courseName.length > 25) {
    errors.push("Course Name should not exceed 25 characters.");
  }
  if (!input.courseCollege) {
    errors.push("Institution name is required");
  } else if (input.courseCollege.length < 4) {
    errors.push("Institution name should have minimum 4 characters.");
  } else if (input.courseCollege.length > 25) {
    errors.push("Institution name should not exceed 25 characters.");
  }

  if (!input.courseCommencement) {
    errors.push("Date of course commencement is required");
  } else if (
    new Date(input.courseCommencement) === "Invalid Date" ||
    isNaN(new Date(input.courseCommencement))
  ) {
    errors.push("Invalid Date of commencement");
  }

  if (!input.courseCompletion) {
    errors.push("Date of course completion is required");
  } else if (
    new Date(input.courseCompletion) === "Invalid Date" ||
    isNaN(new Date(input.courseCompletion))
  ) {
    errors.push("Invalid Date of course completion");
  }

  if (!input.guarantorName) {
    errors.push("Guarantor name is required");
  } else if (input.guarantorName.length < 3) {
    errors.push("Guarantor name should have minimum 3 characters.");
  } else if (input.guarantorName.length > 25) {
    errors.push("Guarantor name should not exceed 25 characters.");
  }

  if (!input.guarantorMobile) {
    errors.push("Mobile number is required");
  } else if (input.guarantorMobile.length !== 10) {
    errors.push("Invalid mobile number");
  }

  if (!input.guarantorPAN) {
    errors.push("Guarantor PAN number is required");
  } else if (
    input.guarantorPAN.length !== 10 ||
    !/^[0-9a-z]+$/i.test(input.guarantorPAN)
  ) {
    errors.push("Invalid guarantor PAN number");
  }

  if (!input.pan) {
    errors.push("Student PAN number is required");
  } else if (input.pan.length !== 10 || !/^[0-9a-z]+$/i.test(input.pan)) {
    errors.push("Invalid Student PAN number");
  }

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

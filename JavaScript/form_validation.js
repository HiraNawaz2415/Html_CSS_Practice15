function validateName() {
  const name = document.getElementById('name').value.trim();
  const error = document.getElementById('nameError');
  if (name.length < 3) {
    error.innerText = "Name must be at least 3 characters.";
    return false;
  } else {
    error.innerText = "";
    return true;
  }
}

function validateEmail() {
  const email = document.getElementById('email').value.trim();
  const error = document.getElementById('emailError');
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!regex.test(email)) {
    error.innerText = "Invalid email format.";
    return false;
  } else {
    error.innerText = "";
    return true;
  }
}

function validatePhone() {
  const phone = document.getElementById('phone').value.trim();
  const error = document.getElementById('phoneError');
  const regex = /^\d{10}$/;
  if (!regex.test(phone)) {
    error.innerText = "Phone must be 10 digits.";
    return false;
  } else {
    error.innerText = "";
    return true;
  }
}

function validatePassword() {
  const password = document.getElementById('password').value;
  const error = document.getElementById('passwordError');
  const valid = password.length >= 8 &&
                /[A-Z]/.test(password) &&
                /[a-z]/.test(password) &&
                /\d/.test(password) &&
                /[@$!%*?&]/.test(password);
  if (!valid) {
    error.innerText = "Must be 8+ chars, include upper, lower, number, special char.";
    return false;
  } else {
    error.innerText = "";
    return true;
  }
}

function validateConfirmPassword() {
  const password = document.getElementById('password').value;
  const confirm = document.getElementById('confirmPassword').value;
  const error = document.getElementById('confirmPasswordError');
  if (password !== confirm) {
    error.innerText = "Passwords do not match.";
    return false;
  } else {
    error.innerText = "";
    return true;
  }
}

function validateGender() {
  const gender = document.querySelector('input[name="gender"]:checked');
  const error = document.getElementById('genderError');
  if (!gender) {
    error.innerText = "Please select your gender.";
    return false;
  } else {
    error.innerText = "";
    return true;
  }
}

function validateInterests() {
  const interests = document.querySelectorAll('input[name="interests"]:checked');
  const error = document.getElementById('interestsError');
  if (interests.length === 0) {
    error.innerText = "Select at least one interest.";
    return false;
  } else {
    error.innerText = "";
    return true;
  }
}

function validateTerms() {
  const terms = document.getElementById('terms').checked;
  const error = document.getElementById('termsError');
  if (!terms) {
    error.innerText = "You must agree to the terms.";
    return false;
  } else {
    error.innerText = "";
    return true;
  }
}

function validateForm() {
  const validName = validateName();
  const validEmail = validateEmail();
  const validPhone = validatePhone();
  const validPassword = validatePassword();
  const validConfirm = validateConfirmPassword();
  const validGender = validateGender();
  const validInterests = validateInterests();
  const validTerms = validateTerms();

  return (
    validName &&
    validEmail &&
    validPhone &&
    validPassword &&
    validConfirm &&
    validGender &&
    validInterests &&
    validTerms
  );
}

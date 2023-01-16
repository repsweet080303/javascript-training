const validateName = (value) => {
  if (value === '' && value === null) {
    return false;
  }
  return true;
};

const validateEmail = (value) => {
  const validRegex = /^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/;

  if (value.match(validRegex)) {
    return true;
  }
  return false;
};

export { validateEmail, validateName };

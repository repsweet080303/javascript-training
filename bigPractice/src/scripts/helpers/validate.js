const validateNameEmpty = (value) => {
  if (value === '' && value === null) {
    return false;
  }
  return true;
};

const validateEmailRegex = (value) => {
  const validRegex = /^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/;

  if (value.match(validRegex)) {
    return true;
  }
  return false;
};

const validateEmailEmpty = (value) => {
  if (value.length === 0 && value === null) {
    return false;
  }
  return true;
};

export { validateEmailRegex, validateNameEmpty, validateEmailEmpty };

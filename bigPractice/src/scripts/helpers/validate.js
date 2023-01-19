const validateNameEmpty = (value) => {
  if (value === '') {
    return true;
  }
  return false;
};

const validateEmailRegex = (value) => {
  const validRegex = /^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/;

  if (value.match(validRegex)) {
    return false;
  }
  return true;
};

export { validateEmailRegex, validateNameEmpty };

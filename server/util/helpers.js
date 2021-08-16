export const inputValidation = (obj) => {
  let valid = true;
  Object.keys(obj).forEach((key) => {
    if (!obj[key]) {
      valid = false;
    }
  });
  return valid;
};

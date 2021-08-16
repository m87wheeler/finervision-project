export const isValidPhone = (phone: string): boolean => {
  if (/^(?:\W*\d){11}\W*$/.test(phone)) {
    return true;
  }
  return false;
};

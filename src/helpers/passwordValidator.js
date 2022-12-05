export function passwordValidator(password) {
  const validatePassword = password => {
    var re = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    return re.test(password);
  };
  if (!password) return "Password can't be empty.";
  if (password.length < 8)
    return 'Password must be at least 8 characters long.';
  if (!validatePassword(password)) return 'Password not valid.';
  return '';
}

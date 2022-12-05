export function confirmpasswordValidator(confirmpassword, password) {
  if (!password) return "Confirm Password can't be empty.";
  if (confirmpassword.length < 5)
    return 'Password must be at least 5 characters long.';
  if (confirmpassword !== password)
    return 'Confirm password and password must be same.';
  return '';
}

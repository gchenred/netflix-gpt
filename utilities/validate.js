function validateEmailPassword(email, password) {
  const validEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
    email
  );
  const validPassword =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/g.test(password);

  if (!validEmail) {
    return "Enter a valid Email Address";
  } else if (!validPassword) {
    return "Enter a valid Password";
  }
  return null;
}

export default validateEmailPassword;

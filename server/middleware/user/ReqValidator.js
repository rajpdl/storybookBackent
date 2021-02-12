module.exports = (req, res, next) => {
  let errors = [];
  const { username, email, password } = req.body;

  if (!username || username.length < 4) {
    errors.push({ text: "Username is blank or less than four characters." });
  }
  if (!email || email.length < 6) {
    errors.push({ text: "Email is blank or not in the right format." });
  }
  if (!password || password.length < 6) {
    errors.push({ text: "Password is blank or less than 6 characters." });
  }
  if (errors.length > 0) {
    return res.status(400).send(errors);
  }
  next();
};

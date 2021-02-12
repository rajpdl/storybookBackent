module.exports = (req, res, next) => {
  let errors = [];
  const { email, password } = req.body;
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

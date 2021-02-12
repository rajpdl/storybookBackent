const { User } = require("../../model/User");

module.exports = async (req, res) => {
  const { email, password } = req.body;
  const result = await User.findOne({ email, password });
  if (!result) {
    return res.status(404).send({ text: "May be your credentials are wrong." });
  }
  const authToken = result.generateAuthToken();
  const refreshToken = result.generateRefreshToken();
  res
    .status(200)
    .send({
      authToken,
      refreshToken,
      username: result.username,
      role: result.role,
    });
};

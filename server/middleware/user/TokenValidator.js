const jwt = require("jsonwebtoken");
const { SECRETE } = require("../../config/SecreteConfig");
module.exports = (req, res, next) => {
  const authToken = req.header("x-auth");

  try {
    const verified = jwt.verify(authToken, SECRETE);
    req.user = {
      _id: verified._id,
      role: verified.role,
      tokenType: verified.tokenType,
    };
    next();
  } catch (error) {
    return res.sendStatus(401);
  }
};

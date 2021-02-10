const { User } = require("../../model/User");

module.exports = async (req, res) => {
  try {
    const result = await User.findById(req.params.id);
    if (!result) {
      return res.status(404).send({ text: "Id not found." });
    }
    res.status(200).send(result);
  } catch (error) {
    return res.status(500).send({ text: "Error occurred in the server." });
  }
};

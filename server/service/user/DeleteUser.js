const { User } = require("../../model/User");
const { Book } = require("../../model/Book");

module.exports = async (req, res) => {
  try {
    const result = await User.findByIdAndRemove(req.params.id);
    if (!result) {
      return res.status(404).send({ text: "Id not found." });
    }
    const books = await Book.deleteMany({ _creator: req.params.id });
    res.status(200).send(result);
  } catch (error) {
    res.sendStatus(500);
  }
};

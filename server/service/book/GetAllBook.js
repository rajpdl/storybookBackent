const { Book } = require("../../model/Book");

module.exports = async (req, res) => {
  try {
    const result = await Book.find({ _creator: req.user._id })
      .populate("_creator", "username")
      .populate("comments._commenter", "username");
    res.status(200).send(result);
  } catch (error) {
    res.sendStatus(500);
  }
};

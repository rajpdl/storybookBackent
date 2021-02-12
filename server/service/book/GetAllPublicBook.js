const { Book } = require("../../model/Book");

module.exports = async (req, res) => {
  try {
    const result = await Book.find({ status: "public" })
      .populate("_creator", "username")
      .populate("comments._commenter", "username");
    res.status(200).send(result);
  } catch (error) {
    res.sendStatus(500);
  }
};

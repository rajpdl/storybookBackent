const { ObjectId } = require("mongodb");

module.exports = (req, res, next) => {
  ObjectId.isValid(req.params.id)
    ? next()
    : res.status(400).send({ text: "Id is not validate." });
};

const { ObjectId } = require("mongodb");
const { mongoose } = require("./../config/DbConfig");
const Schema = mongoose.Schema;

const BookSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    default: "public",
    enum: ["public", "private", "unpublished"],
  },
  allowComment: {
    type: Boolean,
    default: true,
  },
  detail: {
    type: String,
    required: true,
  },
  _creator: {
    type: ObjectId,
    ref: "User",
  },
  comments: [
    {
      _commenter: {
        type: ObjectId,
        ref: "User",
      },
      comment: {
        type: String,
      },
    },
  ],
});

const Book = new mongoose.model("Book", BookSchema);

module.exports = {
  Book,
};

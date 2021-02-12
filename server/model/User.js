const { ObjectId } = require("mongodb");
const { mongoose } = require("./../config/DbConfig");
const Schema = mongoose.Schema;
const jwt = require("jsonwebtoken");
const { use } = require("../controller/UserController");

const { SECRETE } = require("./../config/SecreteConfig");

const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
    minlength: 4,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    default: "user",
    enum: ["admin", "user"],
  },
  stories: [
    {
      type: ObjectId,
      ref: "Book",
    },
  ],
});

UserSchema.methods.generateAuthToken = function () {
  const user = this;
  const authToken = jwt.sign(
    { _id: user._id, role: user.role, tokenType: "auth" },
    SECRETE,
    { expiresIn: 3600 }
  );
  return authToken;
};

UserSchema.methods.generateRefreshToken = function () {
  const user = this;
  const refreshToken = jwt.sign(
    { _id: user._id, role: user.role, tokenType: "refresh" },
    SECRETE,
    { expiresIn: 86400 }
  );
  return refreshToken;
};

UserSchema.methods.json = function () {
  const user = this;
  return { _id: user._id, username: user.username };
};

const User = new mongoose.model("User", UserSchema);

module.exports = {
  User,
};

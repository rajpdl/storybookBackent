const express = require("express");
let app = express.Router();

const ReqValidator = require("./../middleware/user/ReqValidator");
const IdValidator = require("./../middleware/IdValidator");
const SignUp = require("../service/user/SignUp");
const Login = require("./../service/user/Login");
const GetAllUser = require('./../service/user/GetAllUser');
const GetUserById = require('./../service/user/GetUserById');
const DeleteUser = require('./../service/user/DeleteUser');
const UpdateUser = require('./../service/user/UpdateUser');
const TokenValidator = require('./../middleware/user/TokenValidator');
const LoginReqValidator = require("../middleware/user/LoginReqValidator");
const AuthenticateRole = require("./../middleware/user/AuthenticateRole");

app.post("/signup", ReqValidator, SignUp);
app.post("/login", LoginReqValidator, Login);
app.get("/", TokenValidator,  AuthenticateRole(["admin"]), GetAllUser);
app.get("/:id", TokenValidator,  AuthenticateRole(["admin"]), IdValidator, GetUserById);
app.post(
  "/:id",
  TokenValidator, 
  AuthenticateRole(["admin"]),
  IdValidator,
  ReqValidator,
  UpdateUser
);

app.delete("/:id",TokenValidator,  AuthenticateRole(["admin"]), IdValidator, DeleteUser);


module.exports = app;

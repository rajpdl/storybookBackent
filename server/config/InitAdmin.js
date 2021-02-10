const { User } = require("../model/User");

module.exports = async () => {
  const takenUser = await User.findOne({
    username: "Admin",
    email: "admin7252@gmail.com",
    password: "admin7252",
  });
  if (!takenUser) {
    const user = new User({
      username: "Admin",
      email: "admin7252@gmail.com",
      password: "admin7252",
      role: 'admin'
    });
    await user.save();
    return console.log('Admin Created.');
  }
  return console.log('Admin already created successfully');
};

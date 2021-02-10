const { use } = require("../../controller/UserController");
const { User } = require("../../model/User");

module.exports = async (req, res) => {
    const { username, email, password } = req.body;
    const takenUsername = await User.findOne({username});
    if(takenUsername) {
        return res.status(400).send({text: "Username already taken."});
    }
    try {
        
    const user = new User({username, email, password});
    const result = await user.save();
    res.status(200).send(result.json());
    } catch (error) {
        res.sendStatus(500);
    }
}
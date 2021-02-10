const { User } = require("../../model/User")

module.exports = async (req, res) => {
    const { username, email, password, role} = req.body;
    try {
        const result = await User.findById(req.params.id);
        if(!result) {
            return res.status(404).send({text: "Id not found."});
        }
        result.email = email;
        result.password = password;
        res.role = role;
        const user = await result.save();
        res.status(200).send(user);
    } catch (error) {
        res.sendStatus(500);
    }
}
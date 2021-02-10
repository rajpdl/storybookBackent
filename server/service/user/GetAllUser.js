const { User } = require('./../../model/User');
module.exports = async (req, res) => {
    try {
        const result = await User.find({});
        res.status(200).send(result);
    } catch (error) {
        res.sendStatus(500);
    }
};
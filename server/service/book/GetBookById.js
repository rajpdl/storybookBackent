const { Book } = require('./../../model/Book');

module.exports = async(req, res) => {
    try {
        const result =  await Book.findOne({_id: req.params.id, _creator: req.user._id}).populate("_creator", "username").populate("comments._commenter", "username");
        if(!result) {
            return res.status(404).send({text: "Unable to find."});
        }
        res.status(200).send(result);
    } catch (error) {
        res.sendStatus(500);
    }
}
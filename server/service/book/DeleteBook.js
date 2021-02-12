const { Book } = require('./../../model/Book');

module.exports = async(req, res) => {
    try {
        const result =  await Book.findOneAndRemove({_id: req.params.id, _creator: req.user._id});
        if(!result) {
            return res.status(404).send({text: "Unable to find."});
        }
        
        res.status(200).send(result);
    } catch (error) {
        res.sendStatus(500);
    }
}
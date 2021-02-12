const { Book } = require("../../model/Book");

module.exports = async (req, res) => {
    const { detail, status, allowComment } = req.body;
    if(!detail || detail.length < 4) {
        return res.status(400).send({text: "Please add the detail."});
    }
    try {
        const book = await Book.findOne({_id: req.params.id, _creator: req.user._id});
        if(!book) {
            return res.status(404).send({text: "Unable to find."});
        }
        book.detail = detail;
        book.status = status;
        book.allowComment = allowComment;
        const result = await book.save();
        res.status(200).send(result);
    } catch (error) {
            res.status(500).send({text: "Some error occurred in server side in update book."});
    }
    
};
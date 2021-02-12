const { Book } = require('./../../model/Book');
module.exports = async (req, res) => {
    const { comment } = req.body;
    let errors = []
    if(!comment || comment.length < 4) {
        errors.push({text: "Comment is blank or is less than 4 characters."})
    }
    if(errors.length > 0) {
        return res.status(400).send(errors);
    }
try {
    const result = await Book.findById(req.params.id);
    if(!result) {
        return res.status(404).send({text: "Id not found."})
    }
    if(!result.allowComment) {
        return res.status(400).send({text: "Comment is not allowed for this story."});
    }
    const _commenter = req.user._id;
    const newComment = {
        _commenter,
        comment
    };
    result.comments.unshift(newComment);
    const newBook = await result.save();
    res.status(200).send(newBook);
} catch (error) {
    res.sendStatus(500);
}    
}
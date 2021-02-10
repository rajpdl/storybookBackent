const { Book } = require("../../model/Book");

module.exports = async (req, res) => {
    const {  title, detail, status, allowComment } = req.body;
    const takenTitle = await Book.findOne({title});
    if(takenTitle) {
        return res.status(400).send({text: "Title already taken."});
    }
    try {
        const newBook = new Book({
            title,
            detail, 
            status,
            allowComment,
            _creator: req.user._id
        });
        const result = await newBook.save();
        res.status(200).send(result);
    } catch (error) {
            res.sendStatus(500);
    }
    
};
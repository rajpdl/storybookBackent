module.exports = (req, res, next) => {
    let errors = [];
    const { title, detail, _creator} = req.body;

    if(!title || title.length < 4) {
        errors.push({text: 'Title is blank or less than four characters.'});
    }
    if(!detail || detail.length < 6) {
        errors.push({text: 'Detail is blank or less than six characters.'});
    }
    if(errors.length > 0) {
        return res.status(400).send(errors);
    }
    next();
};
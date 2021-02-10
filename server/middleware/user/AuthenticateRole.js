module.exports = (roles) => (req, res, next) => {
    const { role, tokenType } = req.user;
    let authorized;
    for(let i = 0; i < roles.length; i++) {
        authorized = (roles[i] === role) && (tokenType === 'auth');
        if(authorized) {
            break;
        }
    }
    authorized? next(): res.sendStatus(403);
}
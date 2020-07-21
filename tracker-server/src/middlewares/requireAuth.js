const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const User = mongoose.model('User');

module.exports = (req, res, next) => {
    const { authorization } = req.headers; //authorization is from postman key Authorization diff is just here small authorization

    if (!authorization) {
        return res.status(401).send({ error: 'You must be logged in.!' });
    }

    const token = authorization.replace('Bearer ', '');
    jwt.verify(token, 'MY_SECRET_KEY', async (err, payload) => {
        if (err) {
            return res.status(401).send({ error: 'You must logged in.' });
        }
        const { userId } = payload;
        const user = await User.findById(userId); //identify user from db by id
        req.user = user;
        next();
    });
};
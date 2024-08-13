const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

const jwtSecret = process.env.JWT_SECRET; 

async function login(req, res){
    const {id, email} = req.user;

    console.log(id, email);

    const token = jwt.sign({userid: 'id user'}, jwtSecret, {expiresIn: '3h'});

    return res.send(token);
}

module.exports = {
    login
}
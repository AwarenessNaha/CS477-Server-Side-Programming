const User = require('../models/user');
const jwt = require('jsonwebtoken');
const secret = 'Gaia is the first god being';

exports.login = (req,res, next)=>{
let user = new User(req.body.username, req.body.password, null).login();
if(user){
    //generate token, send back to clent
    const jwtToken = jwt.sign({username:user.username, role:role}, secret);
    res.json({jwtToken});
}else {
    res.json({'Error': 'Invalid username and password'});
}
}
exports.authorize = (req, res, next) =>{
    const authHeader = req.headers.authorization;
    if(authHeader){
        const jwtToken = authHeader.split(' ')[1];
        jwt.verify(jwtToken, secret, (err, user) =>{
            if(err){
                res.status(403).json({error:' '});
            }
        })
    }
}

exports.authorizeAdmin = (req, res, next)=>{
    if(req.user.role === 'admin'){
        next();
    }else{
        res.status(403).json({error: 'Forbidden'});
    }
}
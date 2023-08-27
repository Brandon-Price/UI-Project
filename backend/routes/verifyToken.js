const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next)=>{
    const authHeader = req.headers.token;
    if(authHeader){
        const token = authHeader.split(" ")[1];
        jwt.verify(token, process.env.JWT_SEC, (err, user)=>{
            if(err)  return res.status(403).json("Invalid Token");
            req.user = user;
            next();
        });
    } else{
        return res.status(401).json("You are not authenticated");
    }
};

const verifyTokenAndAuthorization = (req, res, next)=>{
    verifyToken(req, res, ()=>{
        if(req.user.id === req.params.id || req.user.isAdmin){
            next();
        }else{
            res.status(403).json("You can't change this accounts information");
        }
    })
}

module.exports = {verifyToken};
const bcrypt = require ("bcryptjs");
const jwt = require ("jsonwebtoken");
const User = require("../users/userModel");


exports.hashPassword  = async (req, res, next) => {
    try {
        if("password" in req.body){
            const hashPassword = await bcrypt.hash(req.body.password, 8);
            req.body.password = hashPassword;
            next();
        } else {
            throw new Error ("No password provided");
        }
    } catch (error) {
        res.status(500).send({error: error.message});
    };
};


exports.tokenCheck = async (req, res, next) => {
    try {
        const token =req.header("authorization").replace("bearer ", "");
        const decoded =jwt.verify(token, "secret");
        const user = await User.findOne({_id: decoded._id});

        if (!user){
            throw new Error("user does not exist");
        };

        req.user = user 
        next()
    } catch (error) {
        res.status(500).semd({ error: "please log in"})
    };
};
const router = require("express").Router();
const User = require("../models/User");
const jwt = require("jsonwebtoken");

// REGISTER
// We can consider hashing the user passwords, but I don't think its neccessary for
// this project
router.post("/register", async (req,res) =>{
    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
    });

    try{
    const savedUser = await newUser.save()
    res.status(200).json(savedUser)
    }catch(err){
        res.status(500).json(err);
    }

});

router.post("/login", async(req, res) =>{
    try{
        const user = await User.findOne({username: req.body.username});
        !user && res.status(401).json("Wrong Login Information");

        const o_password = user.password;
        
        o_password !== req.body.password && 
            res.status(401).json("Wrong Login Information");
        
        const accessToken = jwt.sign({
                id:user._id,
                isAdmin: user.isAdmin
            }, 
            process.env.JWT_SEC,
            {expiresIn:"1d"}
        );

        const { password, ...others} = user._doc;

        res.status(200).json({...others, accessToken});
    }catch(err){
        res.status(500).json(err);
    }
})

module.exports = router;
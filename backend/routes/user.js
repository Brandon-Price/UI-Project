const router = require("express").Router();
const User = require("../models/User");
const {verifyToken} = require("./verifyToken");

router.put("/:id", verifyToken, async (req, res)=>{
  try{
    const updateUser = await User.findByIdAndUpdate(req.params.id, {
        $set: req.body
    },{new:true})
    res.status(200).json(updateUser);
  }catch(err){
    res.status(500).json(err);
  }
});

module.exports = router;
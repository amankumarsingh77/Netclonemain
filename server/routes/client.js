const express = require('express');
const {User } = require("../db/modals");
const jwt = require("jsonwebtoken");
const {SECRET,verifyAuth} = require("../middleware/auth");
const router = express.Router();

router.post("/signup", async (req,res)=>{
    const {username, password} = req.body;
    const user = await User.findOne({username});
    console.log(user);
    if(user){
        res.status(403).json({message:"User already exists"});
    }else{
        const obj = { username: username, password: password };
        const newUser = new User(obj);
        newUser.save();
        const token = jwt.sign({username},SECRET, {expiresIn:"1h"});
        res.status(200).json({message:"User Registered", token:token});
        
    }
})

router.post("/login",async (req, res)=>{
    const {username, password}= req.headers;
    const user = await User.findOne({username, password});
    console.log(username, password)
    if(user){
        const token = jwt.sign({username},SECRET);
        res.status(200).json({message:"User logged in !!", token:token});
    }else{
        res.status(403).json({message:"Invalid credentials"});
    }
})

router.get("/me",verifyAuth, (req,res)=>{
    res.json({message:"Logged in",username:req.user.username});
})

module.exports = router;

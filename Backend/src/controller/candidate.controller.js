const express = require("express");

const router = express.Router();
const Condidate = require("../model/candidate.model");

router.post("/", async(req,res)=>{
    try{
        const condidate = await Condidate.create(req.body).leam
    }catch(error){
        res.status(500).send(error.message);
    }
})
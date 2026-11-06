import express from 'express'

const router=express.Router();

router.post("/profile", (req, res)=>{
    res.status(200).send("user todo ok")
})

export {router};

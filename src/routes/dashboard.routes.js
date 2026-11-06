import express from 'express'
import {verifyController} from '../controller/dashboard.controller.js'

const router=express.Router();

router.post("/verify", verifyController)

router.get("/", (req, res)=>{
    res.status(200).send("get basico")
})


router.post("/otro", (req, res)=>{
    res.status(200).send("todo ok")
})

export default router;

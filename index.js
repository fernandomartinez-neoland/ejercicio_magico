import express from 'express'
import 'dotenv/config'
import dashboardRouter from './src/routes/dashboard.routes.js'

const api=express();
const port=process.env.PORT||3001;
api.use(express.json())


api.get("/",(req, res)=>{
    res.status(200).json({
        message:"todo ok",
        success:"ok"
    })
})

api.use("/api/dashboard",dashboardRouter )



api.listen(port, ()=>{
    console.log(`http://localhost:${port}`)
})
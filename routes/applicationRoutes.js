import express from "express";
import applications from "../data/applications.js";

const router = express.Router()


router.get("/",(req,res)=>{
    res.render("applications")
})









export default router

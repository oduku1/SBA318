import express, { application } from "express";
import users from "../data/user.js";
import applications from "../data/applications.js";

const router = express.Router()


router.get("/",(req,res)=>{
    res.render("users",{users})
})

router.get("/users/:userId/applications",(req,res)=>{
    const userId = Number(req.params.id)
    const user = users.find(user => user.id === userId)
    const userApplications  = applications.filter(application => application.userId === userId)
    res.render("application",{user,userApplications})
})







export default router

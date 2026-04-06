import express from "express"
import { googelAuth, logOut } from "../controllers/auth.controller.js"

const authRouter=express.Router()

authRouter.post("/google",googelAuth)
authRouter.get("/logout",logOut)


export default authRouter;
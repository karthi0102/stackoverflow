import express from "express";
import { signup,login,sendOtp } from "../controllers/auth.js";
import {getAllUsers,updateProfile} from '../controllers/users.js'

import auth from "../middlewares/auth.js";
const router=express.Router();

router.post('/signup',signup)
router.post('/login',login)
router.get("/getAllUsers",getAllUsers)
router.patch('/update/:id',auth,updateProfile)
router.post('/otp',sendOtp)
export default router

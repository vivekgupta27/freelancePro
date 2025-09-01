import express from "express"

import {Register,Login,googleRegister,googleLogin,UserDetail,logout,updateSettings} from "../controllers/authControllers.js";

const router=express.Router();

router.post('/register',Register)

router.post('/login',Login)

router.post("/google-register", googleRegister);

router.post("/google-login", googleLogin);

router.get('/me',UserDetail)

router.post('/logout',logout)

router.post('/setting',updateSettings)




export default router;

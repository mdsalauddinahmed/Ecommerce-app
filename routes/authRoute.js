import express from 'express'
import {forgotPasswordController, loginController, registerController, testController} from '../controllers/authController.js'
import { isAdmin, requireSignIn } from '../middlewares/authMiddleware.js';

// router object
const router = express.Router()

// routing

// Register || method post
router.post('/register',registerController)


// login
router.post('/login',loginController);


// test routes

router.get("/test",requireSignIn,isAdmin, testController);



// forgotPasswordRoutes

router.post('/forgot-password',forgotPasswordController);

// Private user Routes

router.get("/user-auth",requireSignIn,(req,res) =>{
    res.status(200).send({ok:true});
})
// Private  admin  Routes

router.get("/admin-auth",requireSignIn,isAdmin,(req,res) =>{
    res.status(200).send({ok:true});
})


export default router;
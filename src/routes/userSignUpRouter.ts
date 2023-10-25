import express from 'express';
import httpSignUpController from '../controllers/signUpController';

const signUpRouter = express.Router();

signUpRouter.post('/', httpSignUpController);

export default signUpRouter;

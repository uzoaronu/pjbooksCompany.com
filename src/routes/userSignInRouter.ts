import express from 'express';
import httpSignInController from '../controllers/signInController';
const signInRouter = express.Router();

signInRouter.post('/', httpSignInController);

export default signInRouter;

import jwt from 'jsonwebtoken';
import express, { Request, Response } from 'express';
import existsUserInDb from '../models/userModel';
import { userSignUp, userLogin } from '../types/auth';

async function httpSignUpController(req: Request, res: Response) {
  // console.log(req.body);
  const data = req.body;
  const user = await existsUserInDb(data);

  const token = jwt.sign(user, process.env.MY_SECRET, { expiresIn: '1h' });

  res.cookie('token', token, {
    httpOnly: true,
    //secure: true,
    //maxAge: 1000000,
    //signed: true,
  });
  return res.redirect('/authVerify');
}

export default httpSignUpController;

import express, { Request, Response, NextFunction } from 'express';
const jwt = require('jsonwebtoken');

function cookieJwtAuth(req: Request, res: Response, next: NextFunction) {
  const token = req.cookies.token;
  try {
    const user = jwt.verify(token, process.env.MY_SECRET);
    //@ts-ignore
    req.user = user;
    next();
  } catch (error) {
    res.clearCookie('token');
    return res.redirect('/');
  }
}

export default cookieJwtAuth;

import { Request, Response } from 'express';

function homepageRoute(req: Request, res: Response) {
  res.redirect('/welcomepage');
}
export default homepageRoute;

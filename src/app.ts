import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import path from 'path';

import signUpRouter from './routes/userSignUpRouter';
import cookieJwtAuth from './middleware/cookieJwtAuth';
import homepageRoute from './routes/homepageRoute';

const PORT = 1234;
const app = express();

app.use(helmet());
app.use(
  cors({
    credentials: true,
  })
);
app.use(cookieParser());
app.use(bodyParser.json());
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use('/signup', signUpRouter);
app.use('/signin', signUpRouter);
app.post('/authVerify', cookieJwtAuth, homepageRoute);
app.get('/welcomepage', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/welcomepage.html'));
});

app.listen(PORT, () => {
  console.log(`Listening to PORT: ${PORT}`);
});

import userDatabase from './userMongo';
import { userSignUp, userLogin } from '../types/auth';

async function existsUserInDb(data: userSignUp | userLogin) {
  try {
    const user = await userDatabase.findOne({
      email: data.email,
    });

    if (user) {
      return user;
    }
  } catch (error) {
    throw new Error('User details is invalid');
  }
}

export default existsUserInDb;

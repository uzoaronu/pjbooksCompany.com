import mongoose from 'mongoose';
import 'dotenv';

const MONGO_URL = process.env.MONGO_URL;
// 'mongodb+srv://uzo:vpLMifddHb4KVsZ0@cluster0.18lol3f.mongodb.net/';

mongoose.connection.once('open', () => {
  console.log('MongoDB connection ready!');
});

mongoose.connection.on('error', (err) => {
  console.error(err);
});

async function mongoConnect() {
  await mongoose.connect(MONGO_URL);
}

async function mongoDisconnect() {
  await mongoose.disconnect();
}

export default {
  mongoConnect,
  mongoDisconnect,
};

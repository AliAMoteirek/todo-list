import express from 'express';
import 'dotenv/config';
import mongoose from 'mongoose';
import env from './utils/validateEnv';

const app = express();

app.get('/', (req, res) => {
  res.send({ msg: 'Hello, World!!' });
});

const port = env.PORT;
mongoose
  .connect(env.MONGO_CONNECTION_SRTING)
  .then(() => {
    console.log('MongoDB Connected');
    app.listen(port, () => {
      console.log(`The server is running on port: ${port}`);
    });
  })
  .catch(console.error);

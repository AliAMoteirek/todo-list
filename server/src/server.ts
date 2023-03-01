import app from './app';
import env from './utils/validateEnv';
import mongoose from 'mongoose';

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

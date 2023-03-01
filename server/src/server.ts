import express from 'express';

const app = express();
const port = 8080;

app.get('/', (req, res) => {
  res.send({ msg: 'Hello, World!!' });
});

app.listen(port, () => {
  console.log(`The server is running on port: ${port}`);
});

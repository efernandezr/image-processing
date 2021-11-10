import express from 'express';
const app = express();
const port = 3000;

app.get('/api', (req, res) => {
  res.send('Hello, world!');
});

app.listen(port, () => {
  console.log(`server started at localhost:${port}`);
});

const myFunc = (num: number): number => {
  return num * num;
};

// export default  myFunc;
export default app;

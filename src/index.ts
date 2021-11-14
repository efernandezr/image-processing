import express from 'express';
import routes from './routes/index';
import config from './config';

const app = express();
const port = config.PORT;

app.use('/api', routes);

app.listen(port, () => {
  console.log(`server started at localhost:${port}`);
});

export default app;

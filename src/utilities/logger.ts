import express from 'express';

const logger = (
  req: express.Request,
  res: express.Response,
  next: Function
): void => {
  const fileName = req.query.filename;
  const width = parseInt(req.query.width as string);
  const height = parseInt(req.query.height as string);
  console.log(`${fileName} image processed -> size:${width}x${height} px.`);
  next();
};

export default logger;

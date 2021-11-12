import express from 'express';
import paramsChecker from './paramsChecker';

const logger = (
  req: express.Request,
  res: express.Response,
  next: Function
): void => {
  if (paramsChecker(req)) {
    const fileName = req.query.filename;
    const width = parseInt(req.query.width as string);
    const height = parseInt(req.query.height as string);
    console.log(`${fileName} image processed -> size:${width}x${height} px.`);
  } else {
    console.log('couldnt process any image, correct params not present in url');
  }
  next();
};

export default logger;

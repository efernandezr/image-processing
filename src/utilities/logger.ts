import express from 'express';
import paramsChecker from './paramsChecker';

//logs resizing activity in console
const logger = (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
): void => {
  if (paramsChecker(req)) {
    const fileName = req.query.filename;
    const width = parseInt(req.query.width as string);
    const height = parseInt(req.query.height as string);
    console.log(`${fileName} image processed -> size:${width}x${height} px.`);
  } else {
    console.log(
      'couldnt process any image, please correct the params or use existing image'
    );
  }
  next();
};

export default logger;

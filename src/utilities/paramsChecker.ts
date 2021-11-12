import express from 'express';

const paramsChecker = (req: express.Request) => {
  const fileName = req.query.filename;
  const width = parseInt(req.query.width as string);
  const height = parseInt(req.query.height as string);
  if (fileName !== undefined && !isNaN(width) && !isNaN(height)) {
    return true;
  } else {
    return false;
  }
};
export default paramsChecker;

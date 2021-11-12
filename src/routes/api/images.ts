import express from 'express';
import imageResize from '../../utilities/imageResize';
import config from '../../config';
import imgExist from '../../utilities/imgExist';
import paramsChecker from '../../utilities/paramsChecker';
import logger from '../../utilities/logger';

const images = express.Router();

images.get('/', logger, async (req, res) => {
  if (paramsChecker(req)) {
    try {
      const fileName = req.query.filename;
      const width = parseInt(req.query.width as string);
      const height = parseInt(req.query.height as string);
      const outputImagePath = `${config.ASSETS_PATH}/thumb/${fileName}${width}X${height}_thumb.jpeg`;
      const fileExist = await imgExist(outputImagePath);
      if (!fileExist) {
        await imageResize(`${fileName}`, width, height);
        res.status(200).sendFile(outputImagePath);
      } else {
        res.status(200).sendFile(outputImagePath);
      }
    } catch (err) {
      console.log(err);
      res
        .status(200)
        .sendFile('error while processing image path, please try again');
    }
  } else {
    res.status(200).send('please use the correct image parameters');
  }
});

export default images;

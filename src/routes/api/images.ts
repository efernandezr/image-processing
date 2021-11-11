import express from 'express';
import imageResize from '../../utilities/imageResize';
import config from '../../config';
import imgExist from '../../utilities/imgExist';

const images = express.Router();

images.get('/', async (req, res) => {
  const fileName = req.query.filename;
  const width = parseInt(req.query.width as string);
  const height = parseInt(req.query.height as string);
  console.log(width);
  console.log(height);
  console.log(!isNaN(width));
  console.log(!isNaN(height));

  if (fileName !== undefined && !isNaN(width) && !isNaN(height)) {
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

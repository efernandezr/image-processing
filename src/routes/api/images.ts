import express from 'express';
import imageResize from '../../utilities/imageResize';
import config from '../../config';
import imgExist from '../../utilities/imgExist';
import paramsChecker from '../../utilities/paramsChecker';
import logger from '../../utilities/logger';
import path from 'path';
import fs from 'fs';
import getExtention from '../../utilities/getExtention';

const images = express.Router();
const fullDirectoryPath = path.join(config.ASSETS_PATH, 'full');
const thumbDirectoryPath = path.join(config.ASSETS_PATH, 'thumb');

images.get('/', logger, async (req, res) => {
  try {
    //check if url params is correctly set
    if (paramsChecker(req)) {
      const fileName = req.query.filename as unknown as string;
      const width = parseInt(req.query.width as string);
      const height = parseInt(req.query.height as string);

      // checks if image in params exists in /full folder and gets image extention to pass it o imgExist()
      const files = fs.readdirSync(fullDirectoryPath);
      const extention = await getExtention(files, fileName);

      //checks if file was found in folder /full
      if (extention == undefined) {
        res
          .status(200)
          .send('Image name doesnt exist in /full folder, please check');
      }
      //creates output path, can be used for multiple extentions
      const outputImagePath = `${thumbDirectoryPath}/${fileName}${width}X${height}_thumb${extention}`;
      //checks if file exists already as thumbnail and resizes it
      const fileExist = await imgExist(outputImagePath);
      if (!fileExist) {
        await imageResize(`${fileName}`, width, height, extention);
        res.status(200).sendFile(outputImagePath);
      } else {
        res.status(200).sendFile(outputImagePath);
      }
    } else {
      res
        .status(200)
        .send(
          'Image parameters specified are not correct, please check path structure and info'
        );
    }
  } catch (err) {
    console.log(err);
    res
      .status(200)
      .sendFile('error while processing image path, please try again');
  }
});

export default images;

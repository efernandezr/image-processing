import express from 'express';
import imageResize from '../../utilities/imageResize';
import config from '../../config';
import imgExist from '../../utilities/imgExist';
import paramsChecker from '../../utilities/paramsChecker';
import logger from '../../utilities/logger';
import path from 'path';
import fs from 'fs';
import _ from 'lodash';

const images = express.Router();
const fullDirectoryPath = path.join(config.ASSETS_PATH, 'full');

images.get('/', logger, async (req, res) => {
  let inputPath: string;
  let extention: string;
  try {
    if (paramsChecker(req)) {
      const fileName = req.query.filename;
      const width = parseInt(req.query.width as string);
      const height = parseInt(req.query.height as string);

      // let inputPath: string;
      // let extention: string;

      // fs.readdir(fullDirectoryPath, (err, files) => {
      //   if (err) {
      //     return console.log('Picture cant be found, check parameters: ' + err);
      //   } else {
      //     _.forEach(files, (file: string) => {
      //       if (path.basename(file, path.extname(file)) === fileName) {
      //         console.log(path.basename(file, path.extname(file)) === fileName);
      //         inputPath = path.join(
      //           config.ASSETS_PATH,
      //           'full',
      //           `${fileName}${path.extname(file)}`
      //         );
      //         console.log(`1) ${inputPath}`);
      //         extention = path.extname(file);
      //         console.log(`2)${extention}`);
      //       }
      //     });
      //     if (extention === undefined) {
      //       console.log(extention);
      //       res.status(200).send('Image name doesnt exist, please check');
      //     }
      //   }
      // });

      const files = fs.readdirSync(fullDirectoryPath);
      _.forEach(files, (file: string) => {
        if (path.basename(file, path.extname(file)) === fileName) {
          console.log(path.basename(file, path.extname(file)) === fileName);
          inputPath = path.join(
            config.ASSETS_PATH,
            'full',
            `${fileName}${path.extname(file)}`
          );
          console.log(`1) ${inputPath}`);
          extention = path.extname(file);
          console.log(`2)${extention}`);
        }
      });
      if (extention === undefined) {
        console.log(extention);
        res.status(200).send('Image name doesnt exist, please check');
      }

      const outputImagePath = `${config.ASSETS_PATH}/thumb/${fileName}${width}X${height}_thumb.jpeg`;
      const fileExist = await imgExist(outputImagePath);
      if (!fileExist) {
        await imageResize(`${fileName}`, width, height);
        res.status(200).sendFile(outputImagePath);
      } else {
        res.status(200).sendFile(outputImagePath);
      }
    } else {
      res.status(200).send('Image path specified is not correct, please check');
    }
  } catch (err) {
    console.log(err);
    res
      .status(200)
      .sendFile('error while processing image path, please try again (2)');
  }
});

export default images;

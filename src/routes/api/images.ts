import express from 'express';
import imageResize from '../../utilities/imageResize';
import config from '../../config';
const images = express.Router();

images.get('/', async (req, res) => {
  // res.send('Hello, world images!');
  const fileName = req.query.filename;
  const width = parseInt(req.query.width as string);
  const height = parseInt(req.query.height as string);

  imageResize(`${fileName}`, width, height);
});

// imageResize('encenadaport', 200, 200);

export default images;

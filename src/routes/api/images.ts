import express from 'express';
import imageResize from '../../utilities/imageResize';
const images = express.Router();

images.get('/', (req, res) => {
  res.send('Hello, world images!');
});

imageResize('encenadaport', 200, 200);

export default images;

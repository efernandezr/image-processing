// import { error } from 'console';
import sharp from 'sharp';
import config from '../config';

const imageResize = async (
  imgName: string,
  imgWidth: number,
  imgHeight: number
): Promise<void> => {
  const imagePath = `${config.ASSETS_PATH}/full/${imgName}.jpeg`;
  console.log(`${config.ASSETS_PATH}/full/${imgName}.jpg`);
  const outputPath = `${config.ASSETS_PATH}/thumb/${imgName}${imgWidth}X${imgHeight}.jpg`;
  try {
    await sharp(imagePath)
      .resize(imgWidth, imgHeight, { fit: 'contain' })
      .toFile(outputPath);
  } catch (err) {
    console.error('Error procesando imagen', err);
    throw err;
  }
};

export default imageResize;
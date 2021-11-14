// import { error } from 'console';
import sharp from 'sharp';
import config from '../config';

const imageResize = async (
  imgName: string,
  imgWidth: number,
  imgHeight: number,
  ext: string
): Promise<void> => {
  const imagePath = `${config.ASSETS_PATH}/full/${imgName}${ext}`;
  const outputPath = `${config.ASSETS_PATH}/thumb/${imgName}${imgWidth}X${imgHeight}_thumb${ext}`;
  try {
    await sharp(imagePath)
      .resize(imgWidth, imgHeight, { fit: 'contain' })
      .toFile(outputPath);
  } catch (err) {
    console.error(
      'Error while processing image-check file name or url parameters'
    );
    throw err;
  }
};

export default imageResize;

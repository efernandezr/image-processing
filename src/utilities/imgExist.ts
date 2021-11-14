import { access } from 'fs/promises';
import { constants } from 'fs';

// function that checks if image exists in specific path
const imgExist = async (imgPath: string): Promise<boolean> => {
  try {
    await access(imgPath, constants.R_OK | constants.W_OK);
    return true;
  } catch (error) {
    return false;
  }
};

export default imgExist;

import path from 'path';
import _ from 'lodash';

let extention: string;
// function gets extention from file in specific path
const getExtention = async (arr: string[], name: string): Promise<string> => {
  _.forEach(arr, (file: string) => {
    if (path.basename(file, path.extname(file)) === name) {
      extention = path.extname(file);
    }
  });
  return extention;
};
export default getExtention;

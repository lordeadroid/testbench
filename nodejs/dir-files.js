// gives what files or dir are present in a dir

import fs from "fs";

const dot = ".";

const readDir = (dirPath) => {
  return new Promise((resolve, reject) => {
    fs.readdir(dirPath, (error, files) => {
      if (error) {
        reject(error);
      }

      resolve(files);
    });
  });
};

const removeExtension = (fileName) => {
  const [name, _extension] = fileName.split(dot);
  return name;
};

const filesWithExtension = await readDir(dot);
const files = filesWithExtension.map(removeExtension);

console.log(files);

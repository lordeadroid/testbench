// Sample code for using an async function with promise
const { readFile } = require('fs');

const readDataFile = () => {
  return new Promise((res, rej) => {
    readFile('./text', 'utf-8', (err, data) => {
      if (err) {
        rej(err);
      }
      res(data);
    });
  });
};

const fileData = readDataFile();

fileData
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    throw err;
  });

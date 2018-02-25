const downloadVideo = require('./downloadVideo');

const list = require('./list');

const startIndex = 3;
const endIndex = 10;

const prefix = 'PeppaPig-E';
const outputFolder = './download/';

const sleep = (milliseconds) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve()
    }, milliseconds);
  })
}

(async (startIndex, endIndex, prefix, outputFolder) => {
  for (let i = startIndex; i <= endIndex; i++) {
    try {
      let filename = outputFolder + prefix + i.toString() + '.mp4';
      console.log(filename);
      await downloadVideo(list[i], filename)
      //await sleep(5000);
    } catch (ex) {
      console.log(ex);
      console.log('ERROR');
    }
  }
})(startIndex, endIndex, prefix, outputFolder);
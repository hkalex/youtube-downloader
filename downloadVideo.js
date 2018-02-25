const fs = require('fs');
const youtubedl = require('youtube-dl');


module.exports = (url, filepath) => {
  return new Promise((resolve, reject) => {
    let video = youtubedl(url);
    video.on('info', (info) => {
      console.log('Download started');
      console.log('filename: ' + info._filename);
      console.log('size: ' + info.size);
    });
    video.pipe(fs.createWriteStream(filepath));
    video.on('end', () => {
      console.log('Download completed');
      resolve()
    })
    video.on('error', (ex) => {
      console.log('Download error');
      reject(ex);
    })
  })
}

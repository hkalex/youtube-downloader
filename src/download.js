var path = require('path');
var fs = require('fs');
var ytdl = require('youtube-dl');

module.exports = function (url, folder) {

  playlist = function (url) {


    'use strict';
    var video = ytdl(url);

    video.on('error', function error(err) {
      console.log('error 2:', err);
    });

    var size = 0;
    video.on('info', function (info) {
      size = info.size;
      console.log('Downloading ' + info._filename);
      var output = path.join(folder + '/', info._filename + '.mp4');
      video.pipe(fs.createWriteStream(output));
    });

    var pos = 0;
    video.on('data', function data(chunk) {
      pos += chunk.length;
      // `size` should not be 0 here.
      if (size) {
        var percent = (pos / size * 100).toFixed(2);
        process.stdout.cursorTo(0);
        process.stdout.clearLine(1);
        process.stdout.write(percent + '%');
      }
    });

    video.on('next', playlist);

  }

  playlist(url);
}
let argv = process.argv;

if (argv.length < 3) {
  console.log(`The usage is
npm start "youtube_link" "outputfolder"

youtube_link:
  - the video link or playlist link

outputfolder:
  - optional speciy the output folder path. The default is the current folder.


For example:
  npm start "https://www.youtube.com/watch?v=LKaXY4IdZ40" .
  npm start "https://www.youtube.com/playlist?list=PLEFA9E9D96CB7F807" .
  `);
  process.exit(1);
}


let url = argv[2];
let output = argv[3] || '.';
require('./src/download')(url, output);
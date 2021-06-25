/**
 * Using Node Stream API, create a script to unzip a file (after you zip it). 
 * (Use zlib.createGunzip() stream)
 */

const fs = require("fs");
const zlib = require('zlib');

const readable = fs.createReadStream('./naha.txt.gz');
const writeable = fs.createWriteStream('./input.txt');
readable.pipe(zlib.createGunzip()).pipe(writeable);
console.log("File Decompressed.");



// fs.createReadStream('./naha.text.gz')
//     .pipe(zlib.createGunzip())
//     .pipe(fs.createWriteStream('./input.txt'));
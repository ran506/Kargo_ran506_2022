
//please run npm i num-words first
const numWords = require('num-words');
let input = process.argv.slice(2);
let output = [];
input.forEach(i =>  output.push(numWords(i)));
console.log(output);
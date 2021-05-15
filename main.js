"use strict";

function writeThis(word, getRandomNumber) {
  for (let i = 0; i < getRandomNumber; i++) {
    console.log(word);
  }
}

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

writeThis("patata", getRandomNumber(10));
writeThis("aguacate", getRandomNumber(10));
writeThis("pizza", getRandomNumber(10));

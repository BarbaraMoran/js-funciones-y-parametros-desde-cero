"use strict";

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

const randomNumber = getRandomNumber(10);

function writeThis(word, number) {
  for (let i = 0; i < number; i++) {
    console.log(word);
  }
}

writeThis("patata", randomNumber);
writeThis("aguacate", randomNumber);
writeThis("Pizza", randomNumber);

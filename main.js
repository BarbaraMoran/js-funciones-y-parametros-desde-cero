"use strict";

const myWordList = [
  {
    text: "Pencil",
    total: 6,
  },
  {
    text: "Thermo",
    total: 2,
  },
  {
    text: "TV",
    total: 8,
  },
  {
    text: "Phone",
    total: 4,
  },
];

const text = myWordList.text;
console.log(text);

function writeMyArray(myWordList) {
  for (let i = 0; i < myWordList.length; i++) {
    console.log(text);
  }
}

writeMyArray(myWordList);

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

function writeMyArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i].text);
  }
}

writeMyArray(myWordList);

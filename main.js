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
  let text;
  let total;
  for (let i = 0; i < arr.length; i++) {
    text = arr[i].text;
    total = arr[i].total;

    for (let i = 0; i < total; i++) {
      console.log(text);
    }
  }
}

writeMyArray(myWordList);

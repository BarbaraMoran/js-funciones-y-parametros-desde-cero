"use strict";

const url =
  "https://beta.adalab.es/ejercicios-extra/js-funciones-y-parametros-desde-cero/data.json";

function writeMyArray() {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      let text;
      let total;
      for (let i = 0; i < data.results.length; i++) {
        text = data.results[i].text;
        total = data.results[i].total;

        for (let i = 0; i < total; i++) {
          console.log(text);
        }
      }
    });
}

writeMyArray();

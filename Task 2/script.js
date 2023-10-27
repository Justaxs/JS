/* ------------------------------ TASK 2 ----------------------------
Parašykite JS kodą, kuris skaičiuos kiek kartų buvo paspaustas mygtukas
su tekstu "CLICK ME". Paspaudimų rezultatas turi būti matomas dešinėje
pusėje esančiame "state" skaičiavimo bloke (<div id="btn__state">0</div>)
------------------------------------------------------------------- */

const mygtukas = document.querySelector('#btn__element');

const paspaudimuIsvestis = document.querySelector('#btn__state');

let paspaudimai = 0; // naudoju let nes su const neleistu keisti jo reikšmės.

// mygtukui uždedu paprasta eventą su arrow funkcija, kad nuspaudus po vieną padidėtų reikšmė
mygtukas.addEventListener('click', () => {
  paspaudimai++;

  // tiesiog išvedu naują reikšmę į ekraną.
  paspaudimuIsvestis.textContent = paspaudimai;
});

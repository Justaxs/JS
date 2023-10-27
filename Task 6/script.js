/* ------------------------------ TASK 6 -----------------------------------
Turimas "users" masyvas. 

Parašykite funkcijas, kurios atliks nurodytas užduotis:
1. funkcija "getUserAverageAge" - kaip argumentą priims masyvą ir duoto masyvo 
atveju grąžins visų "users" amžiaus vidurkį kaip skaičių.
2. funkcija "getUsersNames" -  kaip argumentą priims masyvą ir duoto masyvo 
atveju grąžins visų "users" vardus naujame masyve pvz., ['John Smith', 'Ann Smith'..].
-------------------------------------------------------------------------- */

const users = [
  { id: '1', name: 'John Smith', age: 20 },
  { id: '2', name: 'Ann Smith', age: 24 },
  { id: '3', name: 'Tom Jones', age: 31 },
  { id: '4', name: 'Rose Peterson', age: 17 },
  { id: '5', name: 'Alex John', age: 25 },
  { id: '6', name: 'Ronald Jones', age: 63 },
  { id: '7', name: 'Elton Smith', age: 16 },
  { id: '8', name: 'Simon Peterson', age: 30 },
  { id: '9', name: 'Daniel Cane', age: 51 },
];

function getUserAverageAge(masyvas) {
  let metuSuma = 0; // const nenaudoju nes kitaip nepakeis kintamojo reikšmės.
  masyvas.forEach(vartotojas => { // suku cikla per masyvą
    metuSuma += vartotojas.age; // prie kintamojo metuSuma pridedu visų userių metus po vieną papildymas metuSuma reikšmę.
  });
  return metuSuma / masyvas.length; // ir returninu metuSuma padalinęs iš masyvo length ir taip išgaunu vidurkį.
}

function getUsersNames(masyvas) { // trumpai ir aiškiai, sukuriau funkcija su vienu parametru, sukuriau kintamaji su tusciu masyvu, prasuku ciklą, ir į tą tusčia masyvą supushinu visus vardus is masyvo ir pabaigoje returninu naują masyva su vardais.
  let varduMasyvas = [];
  masyvas.forEach(vartotojai => {
    varduMasyvas.push(vartotojai.name);
  });
  return varduMasyvas;
}

// console.log("Vartotojų metų vidurkis: " + getUserAverageAge(users));
// console.log("Vardai iš masyvo: " + getUsersNames(users));

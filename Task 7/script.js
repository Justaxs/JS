/* ------------------------------ TASK 7 -----------------------------------
Turimas "audi" objektas.

Parašykite funkciją showObjectKeys, kuri kaip argumentą priims objektą 
ir grąžins visus jo "key" masyve.
-------------------------------------------------------------------------- */
const audi = {
  marke: 'audi',
  model: 'A6',
  year: 2005,
  color: 'white'
};


function showObjectKeys(objektas) { 
  return Object.keys(objektas);
}

// na nieko čia pasakoti, funkcija priima viena argumenta,  skirtą objektui, grąžiną objekto visus raktinius žodžius masyve.

console.log(showObjectKeys(audi));
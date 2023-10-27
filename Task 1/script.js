/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio konvertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formulė: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */

document.querySelector('#submit-btn').addEventListener('click', e => {
    e.preventDefault(); // preventas kad nepersikrautu puslapis pateikus formą.

    // pasiimu vartotojo įvesties duomenis.
    let vartotojoIvestis = document.querySelector('#search');
    let kg = parseFloat(vartotojoIvestis.value); // floata naudoju konvertuoti stringą į skaičių po kablelio.

    const outputDiv = document.querySelector('#output');

    // Čia Formulės svorio konvertavimui
    const lb = kg * 2.2046;
    const g = kg / 0.0010000;
    const oz = kg * 35.274;

    // rezultatams išvesti galėjau paprasčiau atlikti su innterHTMl ar textContend, bet esat sakęs, jie nėra gerai naudoti, tai su text node pasidariau, sudėjau i tikus kad galėčiau naudoti dolerio ženklą.
    const rezultatai = document.createElement('p');
    const rezultataiText = document.createTextNode(`Svarai: ${lb.toFixed(2)} lb , Gramai: ${g.toFixed(2)} g , Uncijos: ${oz.toFixed(2)} oz`);
    rezultatai.appendChild(rezultataiText);
    outputDiv.appendChild(rezultatai);
});




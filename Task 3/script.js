/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Pateikiamas informacijos atvaizdavimas <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;

Pastaba: Informacija apie user'į (jo kortelė) bei turi turėti bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = 'https://api.github.com/users';
const mygtukas = document.querySelector('#btn');
const outputoDivas = document.querySelector('#output');

function vartotojai() {
    fetch(ENDPOINT)
        .then(response => response.json())
        .then(users => {
            users.forEach(user => { // suku ciklą su 'forEach' tarp users kad visus galėčiau išvesti vėliau į ekraną.
                const vartotojoKortele = document.createElement('div'); // susikuriau kortelę, į kuria vėliau apendinsiu vartotojo vardą, avatarą, ir žinoma visiems daviau atskirą klasę, kad galėčiau vizualiai patrauklesnę padaryti.
                vartotojoKortele.classList.add('vartotojoKortele');

                const vartotojas = document.createElement('p');
                vartotojas.classList.add('vartotojas');
                const vartotojasText = document.createTextNode(user.login);
                vartotojas.appendChild(vartotojasText);

                const avataras = document.createElement('img');
                avataras.setAttribute('src', user.avatar_url);
                avataras.setAttribute('alt', 'Vartotojo avataro paveikslėlis');
                avataras.classList.add('avataras');


                vartotojoKortele.append(vartotojas,avataras);

                outputoDivas.appendChild(vartotojoKortele);
            });
        });
}

mygtukas.addEventListener('click', vartotojai);



/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotojui atėjus į tinklapį kreipsis į cars.json failą
ir iš jo atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Informacija apie automobilį (brand) (jo kortelė) bei turi turėti 
bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = 'cars.json';
const outputDivas = document.querySelector('#output');

function automobiliai() {
    fetch(ENDPOINT)
        .then(response => response.json())
        .then(cars => {
            cars.forEach(masiniukas => { // suku ciklą su forEach per cars masyvą, susikuriu kortelės div, h1 su pavadinimu ir ul nerūšiuotą sąrašą, viską suapendintu i korteles divą ir vėliau perteikiu i dom paleides "automobiliai" funkciją.
                const masinosKortele = document.createElement('div');
                masinosKortele.classList.add('masinosKortele');

                const brand = document.createElement('h1');
                const brandText = document.createTextNode(masiniukas.brand);
                brand.appendChild(brandText);
                masinosKortele.appendChild(brand);

                const modeliai = document.createElement('ul');
                masiniukas.models.forEach(masinosModelis => {
                    const modelis = document.createElement('li');
                    const modelText = document.createTextNode(masinosModelis);
                    modelis.appendChild(modelText);
                    modeliai.appendChild(modelis);
                });

                masinosKortele.appendChild(modeliai);
                outputDivas.appendChild(masinosKortele);
            });
        });
}

automobiliai();


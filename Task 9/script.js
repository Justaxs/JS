/* ------------------------------ TASK 9 ---------------------------------------------------------------
Sukurkite klasę "Movie", kuri sukuria objektus su 3 savybėm ir 1 metodu:

Savybės:
title, director, budget
Metodas: 
wasExpensive() - jeigu filmo budget bus didesnis nei 100 000 000 mln USD, tada gražins true, kitu atveju false.
------------------------------------------------------------------------------------------------------ */


class Movie {
    constructor(props) {
        this.props = props;
        this.title = props.title;
        this.director = props.director;
        this.budget = props.budget;
    }
  
    wasExpensive() {
        if (this.budget > 100000000) {
        return true;
        } else {
        return false;
        }
    }
}

// test

const test1 = new Movie({
    title: "Pigus filmas",
    director: "Anonimas",
    budget: 5000
});

const test2 = new Movie({
    title: "Brangus filmas",
    director: "Justas",
    budget: 9999999999
});

// console.log(`${test1.title} Biudžeto tinkamumas: ${test1.wasExpensive()}`);
// console.log(`${test2.title} Biudžeto tinkamumas: ${test2.wasExpensive()}`);

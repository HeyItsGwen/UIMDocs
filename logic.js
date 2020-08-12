let overviewLink = document.getElementById('overviewLink');
let generalStrategyLink = document.getElementById('generalStrategyLink');
let deathLink = document.getElementById('deathLink');
let skillingLink = document.getElementById('skillingLink');

//varibale names for dom navigation of article sections
let overviewVar = document.getElementById('overview');
let generalStrategyVar = document.getElementById('generalStrategy');
let deathVar = document.getElementById('death');
let skillingVar = document.getElementById('skilling');

let checkArray = [overviewVar, generalStrategyVar, deathVar, skillingVar];

overview = () => {

    for (i=0; i<checkArray.length; i++) {
        if (!checkArray[i].classList.contains('d-none')) {
            checkArray[i].classList.add('d-none');
            checkArray[i].classList.remove('d-flex');
        }
    }

    overviewVar.classList.remove('d-none');
    overviewVar.classList.add('d-flex');

}
overviewLink.addEventListener('click', overview);
generalStrategy = () => {

    for (i=0; i<checkArray.length; i++) {
        if (!checkArray[i].classList.contains('d-none')) {
            checkArray[i].classList.add('d-none');
            checkArray[i].classList.remove('d-flex');
        }
    }

    generalStrategyVar.classList.remove('d-none');
    generalStrategyVar.classList.add('d-flex');

}
generalStrategyLink.addEventListener('click', generalStrategy);

death = () => {

    for (i=0; i<checkArray.length; i++) {
        if (!checkArray[i].classList.contains('d-none')) {
            checkArray[i].classList.add('d-none');
            checkArray[i].classList.remove('d-flex');
        }
    }

    deathVar.classList.remove('d-none');
    deathVar.classList.add('d-flex');

}
deathLink.addEventListener('click', death);

skilling = () => {

    for (i=0; i<checkArray.length; i++) {
        if (!checkArray[i].classList.contains('d-none')) {
            checkArray[i].classList.add('d-none');
            checkArray[i].classList.remove('d-flex');
        }
    }

    skillingVar.classList.remove('d-none');
    skillingVar.classList.add('d-flex');

}
skillingLink.addEventListener('click', skilling)

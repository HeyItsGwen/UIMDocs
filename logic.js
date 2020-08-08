let overviewLink = document.getElementById('overviewLink');
let generalStrategyLink = document.getElementById('generalStrategyLink');
let stuffToKnowLink = document.getElementById('stuffToKnowLink');
let skillingLink = document.getElementById('skillingLink');
let pvmLink = document.getElementById('pvmLink');

//varibale names for dom navigation of article sections
let overviewVar = document.getElementById('overview');
let generalStrategyVar = document.getElementById('generalStrategy');
let stuffToKnowVar = document.getElementById('stuffToKnow');
let skillingVar = document.getElementById('skilling');
let pvmVar = document.getElementById('pvm');

let checkArray = [overviewVar, generalStrategyVar, stuffToKnowVar, skillingVar, pvmVar];

//right
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
//left
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

stuffToKnow = () => {

}

skilling = () => {

}

pvm = () => {

}
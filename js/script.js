'use strict';
function sport (typeSport) {
    const footballChamp = 'Ліонель Мессі';
    const boxChamp = 'Олександр Усік';
    const danceChamp = 'Вейн Грецкі';
    if (typeSport === null ) {
        return 'Увага! Ви не вказали ваш улюблений тип спорту!'
    }
    if (typeSport === 'футбол') {
        return `Круто! Хочеш стати,як ${footballChamp}?`;
    } else if (typeSport === 'бокс'){
        return `Круто! Хочеш стати,як ${boxChamp}?`;
    }else if ( typeSport === 'хокей') {
        return `Круто! Хочеш стати,як ${danceChamp}?`;
    }else {
        return `Чудово! Ти будеш кращим у ${typeSport}!`;
    }
}
function capitalOrCity (userCity) {
    if (userCity === null ) {
        return 'Ви не вказали місто'
    }else if (userCity.toLowerCase() === 'київ') {
        return `Ти живеш у столиці України`;
    } else if (userCity.toLowerCase() === 'лондон'){
        return `Ти живеш у столиці Англії`;
    }else if ( userCity.toLowerCase() === 'вашингтон') {
        return `Ти живеш у столиці США`;
    }else {
        return `Ти живеш у місті ${userCity}`;
    }
}
function counterAge (year) {
    const currentYear = 2023;
    return currentYear - year;
}
function checkNull (value,dataNull) {
    if (value == null) {
        alert(`Шкода, що Ви не захотіли ввести свій(ю) ${dataNull}!`);
    }   
}

function getInfo () {
    const data = ['Рік народження','Ваше місто','Улюблений вид спорту']
    let yearOfBirth = prompt(`${data[0]}?`);
    checkNull(yearOfBirth,data[0]);
    let whatCity = prompt(`${data[1]}?`);
    checkNull(whatCity,data[1]);
    let favSport = prompt(`${data[2]}?`);
    checkNull(favSport,data[2]);
    
    let infoAge = counterAge(yearOfBirth)
    let answCity = capitalOrCity(whatCity)
    let answSport = sport (favSport);
    return alert(`Ваш вік : ${infoAge}\n${answCity}\n${answSport}`);
}
getInfo()

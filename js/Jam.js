var cheap = "";
var moderate = "";
var pricey = "";
var expensive = "";

function init() {
    Tabletop.init( { key: 'https://docs.google.com/spreadsheets/d/1HOgOyuzD_NILAxZ4iAgfipaJofB-hRL2b7nabg8b6GY/pubhtml',
                     callback: showInfo,} )
}

function getRandomIntInclusive(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function showInfo(data, tabletop) {
   cheap = (data.cheap.elements[getRandomIntInclusive(0,8)].cheap);
   moderate = (data.moderate.elements[getRandomIntInclusive(0,8)].moderate);
   pricey = (data.pricey.elements[getRandomIntInclusive(0,4)].pricey);
   expensive = (data.expensive.elements[getRandomIntInclusive(0,1)].expensive);
}

window.onload = init();

function oneDollar () {
    document.getElementById("changeText").innerHTML = cheap;
}

function twoDollar () {
    document.getElementById("changeText").innerHTML = moderate;
}

function threeDollar () {
    document.getElementById("changeText").innerHTML = pricey;
}

function fourDollar () {
    document.getElementById("changeText").innerHTML = expensive;
}
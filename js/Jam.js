/*
*Create empty variables so ideas can be displayed
*/
var cheap = "";
var moderate = "";
var pricey = "";
var expensive = "";
var cheapCalled = false;
var moderateCalled = false;
var priceyCalled = false;
var expensiveCalled = false;
/*
*Initialize the spreadsheet
*/
function init() {
    Tabletop.init( { key: 'https://docs.google.com/spreadsheets/d/1HOgOyuzD_NILAxZ4iAgfipaJofB-hRL2b7nabg8b6GY/pubhtml',
                     callback: showInfo,} )
}

/*
*Get a random index function
*/

function getRandomIntInclusive(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//Show a random index

function showInfo(data, tabletop) { 
	cheap = (data.cheap.elements[getRandomIntInclusive(0,8)].cheap);
	moderate = (data.moderate.elements[getRandomIntInclusive(0,8)].moderate);
	pricey = (data.pricey.elements[getRandomIntInclusive(0,10)].pricey);
	expensive = (data.expensive.elements[getRandomIntInclusive(0,2)].expensive);
}

window.onload = init();

//Display when clicked
function oneDollar () {
    document.getElementById("changeText").innerHTML = cheap;
    moderateCalled = false;
    priceyCalled = false;
    expensiveCalled = false; 
    cheapCalled = true;
}

function twoDollar () {
    document.getElementById("changeText").innerHTML = moderate;
    cheapCalled = false;
    priceyCalled = false;
    expensiveCalled = false;
    moderateCalled = true;
}

function threeDollar () {
    document.getElementById("changeText").innerHTML = pricey;
    cheapCalled = false;
    moderateCalled = false;
    expensiveCalled = false;
    priceyCalled = true;
}

function fourDollar () {
    document.getElementById("changeText").innerHTML = expensive;
    cheapCalled = false;
    moderateCalled = false;
    priceyCalled = false;
    expensiveCalled = true;
}

var savedIdeas = [];

function saveIdea() {
	if (cheapCalled == true){
		savedIdeas.push(cheap);
		console.log(savedIdeas);
		cheapCalled = false;
	}
	if (moderateCalled == true){
		savedIdeas.push(moderate);
		console.log(savedIdeas);
		moderateCalled = false;
	}
	if (priceyCalled == true){
		savedIdeas.push(pricey);
		console.log(savedIdeas);
		priceyCalled = false;
	}
	if (expensiveCalled == true){
		savedIdeas.push(expensive);
		console.log(savedIdeas);
		expensiveCalled = false;
	}

}
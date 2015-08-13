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

function init2(){
	Tabletop.init( { key: 'https://docs.google.com/spreadsheets/d/1HOgOyuzD_NILAxZ4iAgfipaJofB-hRL2b7nabg8b6GY/pubhtml',
					 callback: getData,} )
	
}

/*
*Get a random index function
*/

function getRandomIntInclusive(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//Show a random index

var cheapList = [];
var moderateList = [];
var priceyList = [];
var expensiveList = [];
function getData(data, tabletop){
for (i = 0; i<16; i++){
		cheapList.push(data.cheap.elements[i].cheap);
	}
	console.log(cheapList);
	for (i = 0; i<15; i++){
		moderateList.push(data.moderate.elements[i].moderate);	
	}
	console.log(moderateList);
	for (i = 0; i<9; i++){
		priceyList.push(data.pricey.elements[i].pricey);
	}
		console.log(priceyList);
	for (i = 0; i<13; i++){
		expensiveList.push(data.expensive.elements[i].expensive);	
	}
	console.log(expensiveList);
}
function showInfo(data, tabletop) { 
	cheap = (data.cheap.elements[getRandomIntInclusive(0,16)].cheap);
	moderate = (data.moderate.elements[getRandomIntInclusive(0,15)].moderate);
	pricey = (data.pricey.elements[getRandomIntInclusive(0,9)].pricey);
	expensive = (data.expensive.elements[getRandomIntInclusive(0,13)].expensive);
}

function resetButton(){
	for (i = 0; i<cheapList.length-1;i++){
		cheap = cheapList[getRandomIntInclusive(0,16)];
	}
	console.log(cheap);
	for (i = 0; i<moderateList.length-1; i++){
		moderate = moderateList[getRandomIntInclusive(0,15)];
	}
	console.log(moderate);
	for (i = 0; i<priceyList.length-1; i++){
		pricey = priceyList[getRandomIntInclusive(0,9)];
	}
	console.log(pricey);
	for (i = 0; i<expensiveList.length-1; i++){
		expensive = expensiveList[getRandomIntInclusive(0,13)];
	}
	console.log(expensive);
}

window.onload = init();
window.onload = init2();

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
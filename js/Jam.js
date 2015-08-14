

var cheapCalled = false;
var moderateCalled = false;
var priceyCalled = false;
var expensiveCalled = false;
var cheapItem;
var moderateItem;
var priceyItem;
var expensiveItem; 
var cheapList = [];
var moderateList = [];
var priceyList = [];
var expensiveList = [];
var savedIdeas = [];
var expensiveLength;
var priceyLength;
var moderateLength;
var cheapLength;

/*
*Initialize the spreadsheet
*/

function initCheap() {
	Tabletop.init( { key: 'https://docs.google.com/spreadsheets/d/1HOgOyuzD_NILAxZ4iAgfipaJofB-hRL2b7nabg8b6GY/pubhtml',
					 callback: getDataCheap} )
	
}

function initModerate(){
	Tabletop.init( { key: 'https://docs.google.com/spreadsheets/d/1HOgOyuzD_NILAxZ4iAgfipaJofB-hRL2b7nabg8b6GY/pubhtml',
					 callback: getDataModerate} )
	
}

function initPricey(){
	Tabletop.init( { key: 'https://docs.google.com/spreadsheets/d/1HOgOyuzD_NILAxZ4iAgfipaJofB-hRL2b7nabg8b6GY/pubhtml',
					 callback: getDataPricey} )
}

function initExpensive(){
	Tabletop.init( { key: 'https://docs.google.com/spreadsheets/d/1HOgOyuzD_NILAxZ4iAgfipaJofB-hRL2b7nabg8b6GY/pubhtml',
					 callback: getDataExpensive} )
	
}

/*
*Get a random index function
*/

function getRandomIntInclusive(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/*
*Show a random index
*/

function getDataCheap(data, tabletop){
	cheapLength = data.cheap.elements.length;
	for (var i = 0; i<cheapLength; i++){
		cheapList.push(data.cheap.elements[i].cheap);
	}
}
function getDataModerate(data, tabletop){
	moderateLength = data.moderate.elements.length;
	for (var i = 0; i<moderateLength; i++){
		moderateList.push(data.moderate.elements[i].moderate);	
	}
}

function getDataPricey(data, tabletop){
	priceyLength = data.pricey.elements.length;
	for (var i = 0; i<priceyLength; i++){
		priceyList.push(data.pricey.elements[i].pricey);
	}	
}
function getDataExpensive(data, tabletop){
	expensiveLength = data.costly.elements.length;
	for (var i = 0; i<expensiveLength; i++){
		expensiveList.push(data.costly.elements[i].julia);
	}
}

initCheap();
initModerate();
initPricey();
initExpensive();

function resetButtonCheap(){
	cheapItem = cheapList[getRandomIntInclusive(0,cheapLength-1)];
	oneDollar();
}
function resetButtonModerate(){
	moderateItem = moderateList[getRandomIntInclusive(0,moderateLength-1)];
	twoDollar();
}
function resetButtonPricey(){
	priceyItem = priceyList[getRandomIntInclusive(0,priceyLength-1)];
	threeDollar();
}
function resetButtonExpensive(){
	expensiveItem = expensiveList[getRandomIntInclusive(0,expensiveLength-1)];
	fourDollar();
}

function oneDollar () {
	document.getElementById("changeText").innerHTML = cheapItem;
	moderateCalled = false;
	priceyCalled = false;
	expensiveCalled = false; 
	cheapCalled = true;
}

function twoDollar () {
	document.getElementById("changeText").innerHTML = moderateItem;
	cheapCalled = false;
	priceyCalled = false;
	expensiveCalled = false;
	moderateCalled = true;
}

function threeDollar () {
	document.getElementById("changeText").innerHTML = priceyItem;
	cheapCalled = false;
	moderateCalled = false;
	expensiveCalled = false;
	priceyCalled = true;
}

function fourDollar () {
	document.getElementById("changeText").innerHTML = expensiveItem;
	cheapCalled = false;
	moderateCalled = false;
	priceyCalled = false;
	expensiveCalled = true;
}


function saveIdea() {
	if (cheapCalled == true){
		savedIdeas.push(cheapItem);
		cheapCalled = false;
	}
	if (moderateCalled == true){
		savedIdeas.push(moderateItem);
		moderateCalled = false;
	}
	if (priceyCalled == true){
		savedIdeas.push(priceyItem);
		priceyCalled = false;
	}
	if (expensiveCalled == true){
		savedIdeas.push(expensiveItem);
		expensiveCalled = false;
	}
	console.log(savedIdeas);

}

function signOut() {
	var auth2 = gapi.auth2.getAuthInstance();
	auth2.signOut().then(function () {
	  console.log('User signed out.');
	});
}
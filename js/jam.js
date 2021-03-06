/*
*Do the variable thing
*/
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
var currentIdea;

/*
*Create cheap, moderate, pricey and expensive list
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
*Create function to get a random number for list
*/
function getRandomIntInclusive(min, max) {
	var beautifulbutterflywaterbottle = Math.floor(Math.random() * (max - min)) + min;
 	console.log(beautifulbutterflywaterbottle);
 	return beautifulbutterflywaterbottle;
}

/*
*Functions to create lists of date ide3as
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


/*
*Call functions which call list creation with tabletop
*/
initCheap();
initModerate();
initPricey();
initExpensive();

/*
*Create a new idea function
*/
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

/*
*Display button as text function]
*/
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

function newListTag(idea){
		var listTag = document.createElement("LI");
		var listText = document.createTextNode(idea);
		listTag.appendChild(listText);
		document.getElementById("myList").appendChild(listTag);
}

/*
*Function to save ideas to list when save idea button pressed
*/
function saveIdea() {
	if (cheapCalled == true){
		savedIdeas.push(cheapItem);
		cheapCalled = false;
		newListTag(cheapItem);
	}
	if (moderateCalled == true){
		savedIdeas.push(moderateItem);
		moderateCalled = false;
		newListTag(moderateItem);
	}
	if (priceyCalled == true){
		savedIdeas.push(priceyItem);
		priceyCalled = false;
		newListTag(priceyItem);
	}
	if (expensiveCalled == true){
		savedIdeas.push(expensiveItem);
		expensiveCalled = false;
		newListTag(expensiveItem)
	}
	console.log(savedIdeas);
}

/*
*Function that signs someone out of their account when logged on
*/
function signOut() {
	var auth2 = gapi.auth2.getAuthInstance();
	auth2.signOut().then(function () {
	  console.log('User signed out.');
	});
}

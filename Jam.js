function getRandomIntInclusive(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function showInfo(data, tabletop) {
    console.log(data.moderate.elements[getRandomIntInclusive(0,8)].moderate);
  }

var tabletop;

function init() {
tabletop = Tabletop.init( { key: '1HOgOyuzD_NILAxZ4iAgfipaJofB-hRL2b7nabg8b6GY',
                   callback: showInfo,} );
}

window.onload = init();


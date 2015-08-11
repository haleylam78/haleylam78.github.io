function showInfo(data, tabletop) {
    alert("Successfully processed!")
    console.log(data);
  }

function init() {
var tabletop = Tabletop.init( { key: '1HOgOyuzD_NILAxZ4iAgfipaJofB-hRL2b7nabg8b6GY',
                   callback: function(data, tabletop) { console.log(data) },
                   simpleSheet: true } );
				var sheet = tabletop.sheets("$");
				console.log(sheet);
}

window.onload = init();


// variable for the form
let sizeSubmitt = document.getElementById("sizePicker");

//set colored variable
var gridColored = true;
// assigns the table element
var tbl = document.getElementById("pixelCanvas");

// Select color input
function colorPicked (){
	return document.getElementById("colorPicker").value;
}

// Select size input, returns the height and width in [h,w]
function sizePicked (){
	return [document.getElementById("inputHeight",).value, document.getElementById("inputWidth",).value];
}

// When size is submitted by the user, call makeGrid()
sizeSubmitt.addEventListener("submit",(event) =>{
	event.preventDefault();
	//checks colored squares in the grid
	if (gridColored === true){
		//reset the grid to a blank state.
		while (tbl.firstChild) {
			tbl.removeChild(tbl.firstChild);
		}
		makeGrid(sizePicked());
		gridColored = false;
	}
});

function makeGrid([h,w]) {
	// Your code goes here!
	//test console.log('Grid submitted! with h = ' + h + ' and w = ' + w);
  	// creating all cells
	for (var gridH=0;gridH<h;gridH++){
	  // creates a table row
	  var row = document.createElement("tr");
  	  for (var gridW = 0; gridW < w; gridW++) {
		// Create a <td> element
		var cell = document.createElement("td");
		row.appendChild(cell);
	  }
  	  // add the row to the end of the table
	  tbl.appendChild(row);
	}
}

//color the pixels function
function gridClick(evt) {
	if (evt.target.nodeName === 'TD'){
		evt.target.style.backgroundColor = colorPicked ();
		gridColored = true;
	}
}

// add listner to table
tbl.addEventListener('click', gridClick);
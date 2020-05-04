// Returns maximum valid grid height size to fit client window.
function maxGridHeight () {
	return Math.trunc((document.documentElement.clientHeight -340)/20);
}
// Returns maximum valid grid width size to fit client window.
function maxGridWidth () {
	return Math.trunc(document.documentElement.clientWidth/20);
}

//Returns Height Grid input.
function gridHeight () {
	return document.getElementById("inputHeight").value;
}
//Returns Width Grid input.
function gridWidth () {
	return document.getElementById("inputWidth").value;
}


// Function to add maximum height and width valid values to the Grid Size form,
// to fit client window size.
function maxGridSize () {
	document.getElementById("inputHeight").max = maxGridHeight ();
	document.getElementById("inputWidth").max = maxGridWidth ();
}
// Call maxGridSize () upfront.
maxGridSize ();

// Checks if grid fits client window.
function validGridSize () {
	if ((gridHeight () <= maxGridHeight ()) && (gridWidth () <= maxGridWidth ())) {
		return true;
	} else {
		maxGridSize ();
		return false;
	}
}

// Select height input to be used in makeGrid ().
function heightPicked () {
	if (validGridSize ()) {
		return gridHeight ();
	} else {
		alert('Check Height');
	}
}
// Select width input to be used in makeGrid ().
function widthPicked () {
	if (validGridSize ()) {
		return gridWidth ();
	} else {
		alert('Check Width');
	}
}

// Select color input to be used in makeGrid ().
function colorPicked () {
	return document.getElementById("colorPicker").value;
}

// When grid size form is submitted by the user, 
// makeGrid () is called with provided height and width size.
document.getElementById("sizePicker").addEventListener("submit",function (evt) {
	evt.preventDefault ();
	maxGridSize ();
	makeGrid (heightPicked (), widthPicked ());
});

// Function to crerate new grid with listner.
function makeGrid (h,w) {
	const tbl = document.getElementById("pixelCanvas");
	// Grid reset.
	while (tbl.firstChild) {
		tbl.removeChild(tbl.firstChild);
	}
	// Create new table for the grid.
	for (let gridH=0;gridH<h;gridH++) {
		const row = document.createElement("tr");
		for (let gridW = 0; gridW < w; gridW++) {
			const cell = document.createElement("td");
			row.appendChild(cell);
	  	}
	  	tbl.appendChild(row);
	}
	// Add 'click' listner to new created grid to mark cells with provided color.
	tbl.addEventListener('click', function (evt) {
		if (evt.target.nodeName === 'TD'){
			evt.target.style.backgroundColor = colorPicked ();
		}
	});
	// Added extra option (right cllick) listner to clear colored cells.
	tbl.addEventListener('contextmenu', function (evt) {
		if (evt.target.nodeName === 'TD') {
			evt.preventDefault ();
			evt.target.style.backgroundColor = "";
		}
	});
}
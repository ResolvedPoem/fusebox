var fuseBox = document.getElementById(`fusebox`);
let columns = 7;
let rows = 5;
window.onload = function(){
	for(let i1 = 0; i1 < rows; i1++) {
		for(let i2 = 0; i2 < columns; i2++) {
			var light = document.createElement(`div`);
			light.classList.add(`grid`);
			light.id = `${i1},${i2}`;
			fuseBox.appendChild(light);
		}
	}
	let allGrid = document.getElementsByClassName('grid');

	let tempButton = document.getElementById(`tempButton`);
	tempButton.addEventListener("click", lightsOutSwap);
	Array.from(allGrid).forEach(function(gridSpot){
		let gridLocation = gridSpot.id.split(`,`);
	    gridSpot.addEventListener("click", triggerClick);
	});
}

function triggerClick(event) {
	swapColor(event.target);
}

function lightsOutSwap(event) {
	let allGrid = document.getElementsByClassName('grid');
	Array.from(allGrid).forEach(function(gridSpot){
		let gridLocation = gridSpot.id.split(`,`);
	    gridSpot.removeEventListener("click", triggerClick);
	    if(!(gridLocation[0] == `4` || gridLocation[1] == `6`)) {
		    gridSpot.addEventListener("click", lightsOut);
			var random_boolean = Math.random() < 0.5;
			if(random_boolean) {
				gridSpot.style.backgroundColor = `rgb(204, 231, 255)`;
			} else {
				gridSpot.style.backgroundColor = `rgb(32, 43, 65)`;
			}
	    } else {
	    	gridSpot.addEventListener("click", longsOut);
	    	gridSpot.style.backgroundColor = `rgb(184, 74, 61)`;
	    }
	});
}

function lightsOut(event) {
	let clickedDiv = event.target;
	let clickedGrid = clickedDiv.id.split(`,`);
	console.log(clickedGrid);
	clickedGrid[0] = Number(clickedGrid[0]);
	clickedGrid[1] = Number(clickedGrid[1]);
	let upDiv = document.getElementById(`${clickedGrid[0]-1},${clickedGrid[1]}`);
	let downDiv = document.getElementById(`${clickedGrid[0]+1},${clickedGrid[1]}`);
	let leftDiv = document.getElementById(`${clickedGrid[0]},${clickedGrid[1]-1}`);
	let rightDiv = document.getElementById(`${clickedGrid[0]},${clickedGrid[1]+1}`);
	swapColor(clickedDiv);
	swapColor(upDiv);
	swapColor(leftDiv);
	if(!(rightDiv.id.split(',')[1] == `6`)) {
		swapColor(rightDiv);
	}
	if(!(downDiv.id.split(',')[0] == `4`)) {
		swapColor(downDiv);
	}
}

function longsOut(event) {
	let clickedDiv = event.target;
	let clickedGrid = clickedDiv.id.split(`,`);
	clickedGrid[0] = Number(clickedGrid[0]);
	if(clickedGrid[0] == `4`) {
		if(clickedGrid[1] == `6`) {
			let div = document.getElementById(`${3},${5}`);
			return swapColor(div);			
		}
		for(let i = 3; i >= Math.ceil(rows/2)-2; i--) {
			let div = document.getElementById(`${i},${clickedGrid[1]}`);
			swapColor(div);
		}
	} else {
		for(let i = 5; i >= Math.floor(columns/2); i--) {
			let div = document.getElementById(`${clickedGrid[0]},${i}`);
			swapColor(div);
		}		
	}
}

function swapColor(div) {
	if (div && div.tagName == `DIV`) {
		if(div.style.backgroundColor == `rgb(204, 231, 255)`) {
			div.style.backgroundColor = `rgb(32, 43, 65)`;	
		} else {
			div.style.backgroundColor = `rgb(204, 231, 255)`;					
		}
	}
}
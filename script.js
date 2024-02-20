var fuseBox = document.getElementById(`fusebox`);
window.onload = function(){
	let columns = 7;
	let rows = 5;
	for(let i1 = 0; i1 < columns; i1++) {
		for(let i2 = 0; i2 < rows; i2++) {
			var light = document.createElement(`div`);
			light.classList.add(`grid`);
			light.id = `grid${i1}${i2}`;
			fuseBox.appendChild(light);
		}
	}
	let allGrid = document.getElementsByClassName('grid');
	Array.from(allGrid).forEach(function(gridSpot){
	    gridSpot.addEventListener("click", function() {
			if(gridSpot.style.backgroundColor == `rgb(204, 231, 255)`) {
				gridSpot.style.backgroundColor = `rgb(32, 43, 65)`;	
			} else {
				gridSpot.style.backgroundColor = `rgb(204, 231, 255)`;					
			}
	    });
	});
}
$(".start-game").click(function () {
	let arrayOfOrder = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
	for (let i = 0; i < 200; i++) {
		let a = Math.floor(Math.random()*16);
		let b = Math.floor(Math.random()*16);
		let d = arrayOfOrder[a];
		arrayOfOrder[a] = arrayOfOrder[b];
		arrayOfOrder[b] = d;
	} 
	let arrayOfDiv=document.querySelectorAll(".cell");
	for (let i = 0; i < 15; i++) {
		arrayOfDiv[i].style.order = arrayOfOrder[i];
	};
});

$(".main-board").hide();

let clicks = 0;
let timer = 0;

$(".start-game").click(function () {
	let clicks = 0;
    let timer = 0;

	setInterval(function(){
		timer += 1;
		document.querySelector(".timer").innerHTML ="You have started the game " + timer + " seconds ago";

	} ,1000);

	switch(timer) {
		case 32:
			$(".star1").hide();
		case 48:
			$(".star2").hide();
		case 64:
			$(".star3").hide();
		case 80:
			$(".star4").hide();
	};

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
	$(".main-board").show();

});

$(".cell").click(function( event ) {
	clicks += 1;
	document.querySelector(".clicks").innerHTML ="You have cliked " + clicks + " times";
	let card = $(event.target).children().first();
	card.removeClass("close");
	card.addClass("open");
	let choises = $(".open").length;
	if (choises == 2) {
		let a = $(".open").first().attr("class");
		let b = $(".open").last().attr("class");
		if (a == b) {
			$(".open").removeClass("open").addClass("solved");
		}
		else {
			setTimeout(function() { 
				$(".open").removeClass("open").addClass("close")
			}, 500);
		}
	}
	if($(".solved").length == 16) {
 		$(".main-board").hide();
 		$(".gameOver").removeClass("close");
	};
});
 
$(".again").click(function() {
	$(".gameOver").addClass("close");
	$(".main-board").show();
	$(".front").addClass("close").removeClass("solved");
});


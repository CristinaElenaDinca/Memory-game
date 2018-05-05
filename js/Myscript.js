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

$(".cell").click(function( event ) {
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
 		$(".main-board").addClass("close");
 		$(".gameOver").removeClass("close");
	};
});
 
$(".again").click(function() {
	$(".gameOver").addClass("close");
	$(".main-board").removeClass(close);
});
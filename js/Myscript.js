$(".main-board").hide();

let clicks;
let timer;
let nrStars = 4;

$(".stage1").click(function () {
	clicks = 0;
	timer = 0;
    $(".front").addClass("close").removeClass("solved").removeClass(".open");
    $(".stars1").removeClass("close");
	$(".stars2").removeClass("close");
	$(".stars3").removeClass("close");
	$(".stars4").removeClass("close");
	setInterval(function() {
		timer += 1;

		document.querySelector(".timer").innerHTML ="You have started the game " + timer + " seconds ago";
	} , 1000);

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
	}
	$(".main-board").show();
});


$(".cell").click(function( event ) {
	clicks += 1;
	document.querySelector(".clicks").innerHTML ="You have cliked " + clicks + " times";
	switch (clicks) {
		case 18:
			$(".stars1").removeClass("open");
			$(".stars1").addClass("close");
			nrStars--;
			break;
		case 30:
			$(".stars2").removeClass("open");
			$(".stars2").addClass("close");
			nrStars--;
			break;
		case 40:
			$(".stars3").removeClass("open");
			$(".stars3").addClass("close");
			nrStars--;
			break;
		case 60:
			$(".stars4").removeClass("open");
			$(".stars4").addClass("close");
			nrStars--;
			break;
	}
	
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
				$(".open").removeClass("open").addClass("close");
			}, 500);
		}
	}
	if($(".solved").length == 16) {
 		$(".main-board").hide();
 		$(".stage1").hide(); 	    
 		if (nrStars == 0) {
 			document.querySelector(".gameOver.second").innerHTML = " You won by " + clicks + " clicks"  +" in " + timer + " seconds!"+ "You got no stars this time!";
 		}
 		else {
 			document.querySelector(".gameOver.second").innerHTML = " You won by " + clicks + " clicks"  +" in " + timer + " seconds!"+ "You got " + nrStars + " of stars! Well done!";
 		}
 		$(".gameOver").removeClass("close");
	}
});
 
$(".again").click(function() {
	$(".gameOver").addClass("close");
	$(".main-board").show();
	$(".stage1").show();
	$(".front").addClass("close").removeClass("solved").removeClass(".open");
	clicks = 0;
	timer = 0;
	$(".stars1").removeClass("close");
	$(".stars2").removeClass("close");
	$(".stars3").removeClass("close");
	$(".stars4").removeClass("close");
});


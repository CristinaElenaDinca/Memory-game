/*When launching the game there are a couple of variable defined as global: 
numbers of clicks, the timing, the number of stars 
(as I need to work with those variables all over the script.
 Also the main board is hidden and are displayed the riles of the game and the (re)start button*/

$(".main-board").hide();

let clicks;
let timer;
let nrStars = 4;

/*I used the classic Javascript language and, as often as I could, I used the Jquery library in my process of learning and making the code easier to read*/

$(".stage1").click(function () {
	/*When clicking on the restart button first all the stars are being revealed 
	by removing the "close"class ant the variables that are counting the number of clicks and time are set to 0*/
	clicks = 0;
	timer = 0;
    $(".front").addClass("close").removeClass("solved").removeClass(".open");
    $(".stars1").removeClass("close");
	$(".stars2").removeClass("close");
	$(".stars3").removeClass("close");
	$(".stars4").removeClass("close");

	/*I am using the setInterval  method to count the seconds. 
	At every second (1000 milisecond) the timer variable is incremented by 1 and displayed by setting the innerHTML property*/
	setInterval(function() {
		timer += 1;
		document.querySelector(".timer").innerHTML ="You have started the game " + timer + " seconds ago";
	} , 1000);

	/*The fallowing passage is randomly arranging the cards (divs with graphic fonts)*/
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
	/*The prize stars are evaluated according to the numbers of tries (clicks on the main board)*/
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
	
	/*At every click the main card is revealed by removing class "close"  and adding class a temporary class "open"*/
	let card = $(event.target).children().first();
	card.removeClass("close");
	card.addClass("open");

	/*The number of choices  is counted by the number of elements with the temporary class "open".
	 The condition choices == 2 is verified at every click.  When is true, the system starts to compare the classes on the two 'opened' divs.*/
	let choises = $(".open").length;
	if (choises == 2) {
		let a = $(".open").first().attr("class");
		let b = $(".open").last().attr("class");
		if (a == b) {
			/*If the classes are the same the temporary class "open" is removed and is added a final class "solved"*/
			$(".open").removeClass("open").addClass("solved");
		}
		/*If the classes are NOT the same the temporary class "open" 
		is removed and is added the class "close" and the cards are hidden again with a delay of half a second*/
		else {
			setTimeout(function() { 
				$(".open").removeClass("open").addClass("close");
			}, 500);
		}
	}

	/*With every click the users makes the program checks if the total numbers of "solved" class reached 16, 
	this meaning the game is over and the user have won!
	At this moment the main board and the (re)start button is hidden and the winning message is displayed*/
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
 
/*At the end of the winning message I have displayed another (re)start button that gets the game back to initial conditions.*/ 
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


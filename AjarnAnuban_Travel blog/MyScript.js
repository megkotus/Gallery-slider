		// the slideshow is playing when the page is loaded
		var paused = false;

		// set interval makes it move 
		// forward every 3 second
		setInterval(function (){
			// first check if it is paused
			if(!paused){
				$("#forward").click();
			};
		}, 3000);

		// when you click on a thumbnail
		// it sets the src of the big image
		// to be the same as the image
		// you clicked on

		$(".crop-img").click(function(){
			$("#bigImage").attr('src', 
				$(this).attr('src'));
		});

		// the counter keeps track of which image you are showing
		var counter = 1;
		// click on the current
		// image to load it into the big image
		$(`#image${counter}`).click();
		
		// when you click on the backwards
		// button select the previous image
		$("#backward").click(function (){
			// go backward
			counter = counter - 1;
			// loops the slideshow 
			if(counter < 1){
				counter = 6;
			}
			// virtually click on the current
			// image to load it into the big image
			$(`#image${counter}`).click();
		});

		// go forward on button click
		$("#forward").click(function (){
			// go forward one in the counter
			counter = counter + 1;
			// loops the slideshow 
			if(counter > 6){
				counter = 1;
			}
		
			// click on the current
			// image to load it into the big image
			$(`#image${counter}`).click();
		});
		
		// changes the title into the Country name as the counter changes
		$(".crop-img").click(function(){
			if (counter == 1) {
			$("#title").html("Thailand");
			$("#subtitle").html("Country of huge temples.");
			}
			if (counter == 2) {
			$("#title").html("Malaysia");
			$("#subtitle").html("Lots of cute monkeys here.");
			}
			if (counter == 3) {
			$("#title").html("Vietnam");
			$("#subtitle").html("Thousands of bikes.");
			}
			if (counter == 4) {
			$("#title").html("Russia");
			$("#subtitle").html("That's where I come from.");
			}
			if (counter == 5) {
			$("#title").html("Laos");
			$("#subtitle").html("Rural, but French.");
			}
			if (counter == 6) {
			$("#title").html("Croatia");
			$("#subtitle").html("Everlasting sea.");
			}
		});
		// pause/play the slideshow on click
		$("#bigImage").click(function (){
			paused = !paused;
		});
		
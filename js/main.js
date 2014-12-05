// JavaScript Document
$(document).ready(function() {
   // slides
    var slides = [
	{ "slideNumber":"1" , "slideText":"Doe" }, 
	{ "slideNumber":"1" , "slideText":"REAR VIEW CAMERA" }, 
	{ "slideNumber":"2" , "slideText": "CHAMPAGNE FOR THE BACK SEAT DRIVER" },
	{ "slideNumber":"3" , "slideText":"BMW M HIGH PERFORMANCE BRAKES" }, 
	{ "slideNumber":"4" , "slideText": "NIGHT VISION" }, 
	{ "slideNumber":"5" , "slideText":"EMPTY PARKING LOT" }, 
	{ "slideNumber":"6" , "slideText": "PADDLE SHIFTERS" },
	{ "slideNumber":"7" , "slideText":"BMW i8 CONCEPT" }, 
	{ "slideNumber":"8" , "slideText": "CURVY ROAD" }, 
	{ "slideNumber":"9" , "slideText":"DUAL EXHAUSTS" }, 
	{ "slideNumber":"10" , "slideText": "XENON ADAPTIVE HEADLIGHTS" },
	{ "slideNumber":"11" , "slideText":"DASHING THROUGH THE SNOW" }, 
	{ "slideNumber":"12" , "slideText": "HIGHWAY 101" }, 
	{ "slideNumber":"13" , "slideText":"335 HORSES" }, 
	{ "slideNumber":"14" , "slideText": "KIDNEY GRILLE" },
	{ "slideNumber":"15" , "slideText":"BMW ISETTA" }, 
	{ "slideNumber":"16" , "slideText": "BACK SEAT COUCH POTATOES" }, 
	{ "slideNumber":"17" , "slideText":"BMW M3 GT" }, 
	{ "slideNumber":"18" , "slideText": "BURNING RUBBER" },
	{ "slideNumber":"19" , "slideText":"STOP SIGNS" }, 
	{ "slideNumber":"20" , "slideText": "SPEED LIMITS" }, 
	{ "slideNumber":"21" , "slideText": "TOP DOWN" }, 
	{ "slideNumber":"22" , "slideText": "SETTING THE MOOD" }, 
	{ "slideNumber":"23" , "slideText": "YELLOW LIGHTS" }, 
	{ "slideNumber":"24" , "slideText": "HEATED SEATS" }, 
	{ "slideNumber":"25" , "slideText": "ROAD LESS TRAVELED" }, 
	{ "slideNumber":"26" , "slideText": "ROAD TRIP" }, 
	{ "slideNumber":"27" , "slideText": "SAFE DOG" }, 
	{ "slideNumber":"28" , "slideText": "CURVES" }, 
	{ "slideNumber":"29" , "slideText": "GINA" }, 
	{ "slideNumber":"30" , "slideText": "PASSING LANE" }
	];
	// ending slides
   	var endingSlide = [
	{ "slideNumber":"1" , "slideText":"VISION" },
	{ "slideNumber":"1" , "slideText":"VISION" }, 
	{ "slideNumber":"2" , "slideText":"1 SERIES" }, 
	{ "slideNumber":"3" , "slideText": "7 SERIES" },
	{ "slideNumber":"4" , "slideText":"ACTIVE E" }, 
	{ "slideNumber":"5" , "slideText": "ACTIVE E" }, 
	{ "slideNumber":"6" , "slideText":"X3" }, 
	{ "slideNumber":"7" , "slideText": "3 SERIES" },
	{ "slideNumber":"8" , "slideText":"6 SERIES COUPE" }, 
	{ "slideNumber":"9" , "slideText": "6 SERIES COUPE" }, 
	{ "slideNumber":"10" , "slideText": "M5" }, 
	{ "slideNumber":"11" , "slideText": "M5" }, 
	{ "slideNumber":"11" , "slideText": "M5" }
	];
   
		
	
 	
	$("#startBtn").click(function(){
		$("#intro").hide();
		$("#naughtyNice").show();	 
		init(); 
		//slides[0].lastName
	});
	$("#endPageNumber").click(function(){
		resetPage();	
	});
	
	
			
	function init(){
		
		naughtyNiceMeter = 6;
		imgCounter=1;
		initRandomFunction();
		bindClicks();
		console.log(naughtyNiceMeter);
	};
	function bindClicks(){
		$("#naughtyBtn").bind("click",function(){
			naughtyNiceMeter = naughtyNiceMeter + 1;
			clickCounter();
		});
		$("#niceBtn").bind("click",function(){
			naughtyNiceMeter = naughtyNiceMeter - 1;
			clickCounter();
		});
	};
	function resetPage(){
		$("#naughtyNice").show();
		$("#endFrame").hide();
		naughtyNiceMeter = 6;
		imgCounter=1;
		clickCounter();
		console.log(naughtyNiceMeter);
	};
	function endFrame(){
		$("#naughtyNice").hide();
		$("#endFrame").show();
		var textEnding = "May we suggest the "+endingSlide[naughtyNiceMeter].slideText+"? Naughty or Nice, there's a BMW for everyone.<br />Hope you have a nice (and just a little naughty) holiday season. From BMW."
		$("#endFrameContent").css("background","url('images/slides/imageE"+naughtyNiceMeter+".jpg')");
		if (naughtyNiceMeter > 6){
			$("#endFrameContentText").html("IT APPEARS THAT YOU ARE VERY NAUGHTY.");
			$("#twitShareNice").hide()
			$("#twitShare").show()
			$("#fbShareNice").hide()
			$("#fbShare").show();
		} else if (naughtyNiceMeter < 6){
			$("#endFrameContentText").html("IT APPEARS THAT YOU ARE VERY NICE.");
			$("#twitShareNice").show()
			$("#twitShare").hide()
			$("#fbShareNice").show()
			$("#fbShare").hide();
		}
		$("#endFrameContentNN").html(textEnding);
	};
	function clickCounter(){
		console.log(naughtyNiceMeter);
		$("#pageNumberText").html(imgCounter+" of 5");
		if (imgCounter > 5){
			endFrame();
		}else{
			nextImage();			
		};
	};
	function nextImage(){
		randomFunction();
	};
	function initRandomFunction(){
		slideNumber = $.randomBetween(1, 30);
		$("#mainContentBG").css("background","url('images/slides/image"+slideNumber+".jpg')");
		$("#mainContentText").html(slides[slideNumber].slideText);	
		imgCounter=imgCounter+1;
	};
	function randomFunction(){
		
			$("#niceBtn").unbind('click');
			$("#naughtyBtn").unbind('click');
		slideNumber = $.randomBetween(1, 30);
		$("#mainContentBG").fadeOut(250, function(){
			$("#mainContentBG").css("background","url('images/slides/image"+slideNumber+".jpg')");
			$("#mainContentText").html(slides[slideNumber].slideText);
		});
		$("#mainContentBG").fadeIn(250, function(){imgCounter=imgCounter+1;bindClicks();})
		
	};
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
});
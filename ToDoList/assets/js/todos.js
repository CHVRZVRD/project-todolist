// Check Off Specific To-Dos by clicking
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});


	// // if li is gray
	// if($(this).css("color") === "rgb(128, 128, 128)"){
	// 	// turn it black
	// 	$(this).css({
	// 		color: "black",
	// 		textDecoration: "none"
	// 	});

	// }
		
	// // else
	// else {
	// 	// turn it gray
	// 	$(this).css({
	// 		color: "rgb(128, 128, 128)",
	// 		textDecoration: "line-through"
	// 	});
 //    }
		


// click on X to delete To-Do
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	event.stopPropagation();
});


$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		// grabbing new to-do text from input
		var todoText = $(this).val();
		$(this).val("");
		// create a new li and ad to ul
		$("ul").append("<li>" + todoText + "<span> <i class='fas fa-trash'></i></span></li>")
	}
});

$(".fa-edit").click(function(){
	$("input[type='text']").fadeToggle();
});
// check off specific Todo By clicking

$("ul").on("click", "li", function(){
	 $(this).toggleClass("completed");
});
//Click on x to delete ToDo
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(1000,function(){
		$(this).remove();
	});
	event.stopPropagation();
	
});

$("input[type='text']").keypress(function(event){
 if(event.which===13){
 	//Grabbing new todo text form input
 	var todoText = $(this).val();
 	$(this).val("");
 	//Creat a new li and and add it
 	$("ul").append("<li><span><i class='fa fa-trash'></i></span>" + todoText + "</li>");

 }
})

$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
});

$(document).ready(function(){
	var flavor = 0  ;
	var size = 0, total;
	$("#confirm").hide();

	$( "select" ).change(function () {
    	$( "select option:selected" ).each(function() {
      	flavor = $( "#flavors" ).val();
      	size = $("#size").val();
      	total  = parseInt(flavor) + parseInt(size);
      	$("#total").val(total);
    });

  	});
    $("#submit").click(function(){
      if(flavor == 0) 
        alert("Please Select the flavor ");
      if(size == 0)
        alert("Please Select the size");
    })


});
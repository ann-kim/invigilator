var app = angular.module('invigilatorApp');

app.service('service', function($firebaseAuth){
	// Datepicker
	this.datepicker = function(){
		$(".date-picker").on("change", function () {
	    var id = $(this).attr("id");
	    var val = $("label[for='" + id + "']").text();
	    $("#msg").text(val + " changed");
		});
	};
	


});
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

	

	// Category input
	// this.getCategory = function(){
	// 	var categoryArry = ["atm/cash withdrawals", "auto - gasoline", "auto - insurance", "auto - maintenance", "auto - registration", "auto - miscellaneous", "cable/satellite", "charitable giving", "checks", "child/dependent expenses", "clothing/shoes", "dues and subscriptions", "education - tuition", "education - supplies", "electronics", "entertainment", "general merchandise", "gifts", "groceries", "hobbies", "home - insurance", "home - rent/mortgage", "home - repairs/maintenance", "insurance", "loans", "medical - appointments", "medical - dental", "medical - insurance", "medical - optometry", "miscellaneous expenses", "online services", "other bills", "personal care", "pets/pet care", "postage and shipping", "printing", "restaurants/dining", "savings", "service charges/fees", "taxes", "telephone services", "utilities"];
	// 	var categoryToDisplay = [];
	// 	for (var i = 0; i < categoryArry.length; i++){
	// 		if (i = )
	// 	}
	// }
	


});
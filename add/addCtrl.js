var app = angular.module('invigilatorApp');

app.controller('addCtrl', function($scope, service){
 	// Date
    $(".date-picker").datepicker();

  	// Price - Two Decimals
  	$('.price-input').on('change', function(){
    	$(this).val(parseFloat($(this).val()).toFixed(2));
	});


    // Category
    // service.getCategory($scope.category);


    // Grid
    // $scope.myData = [{
    // 	"date": 
    // }];

    // $scope.gridOption

});

var app = angular.module('invigilatorApp');

app.controller('loginCtrl', function($scope, service, $location){
	//Step 4 of Registration
	var loginCallback = function(user){
		user.uid = user.uid.replace('simplelogin:', '');
		$location.path('/dashboard/' + user.uid)
	};

	$scope.login = function () {
		return authService.login($scope.details, loginCallback);
	};

	//Step 2 of Registration
	$scope.register = function () {
		return authService.register($scope.details, loginCallback);
	};

	$scope.status = 'register';
	$scope.showReg = function(){
		if($scope.status === 'register'){
			$scope.status = 'login';
		} else {
			$scope.status = 'register';
		}
		$scope.reg = !$scope.reg;
	};
});
var app = angular.module('invigilatorApp', ['ngRoute', 'firebase']);

app.config(function($routeProvider){
	$routeProvider
		.when('/home', {
			templateUrl: 'home/homeTmpl.html',
			controller: 'homeCtrl'
		})
		.when('/login', {
			templateUrl: 'login/loginTmpl.html',
			controller: 'loginCtrl'
		})
		.when('/add', {
			templateUrl: 'add/addTmpl.html',
			controller: 'addCtrl'
		})
		.when('/graph', {
			templateUrl: 'graph/graphTmpl.html',
			controller: 'graphCtrl'
		})
		.otherwise({
			redirectTo: '/home'
		})
});
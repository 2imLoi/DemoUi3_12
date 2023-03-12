const restaurantApp = angular.module('restaurantApp', ['ngRoute'])
restaurantApp.config(function ($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl: '/views/component/home/index.html',
			controller: 'homeCtrl',
		})
		.when('/our-menu', {
			templateUrl: '/views/component/our-menu/our-menu.html',
			controller: 'ourMenuCtrl',
		})
})

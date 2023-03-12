const restaurantApp = angular.module("restaurantApp", ["ngRoute"]);
restaurantApp.config(function ($routeProvider) {
  $routeProvider.when("/", {
    templateUrl: "/views/component/home/index.html",
    controller: "homeCtrl",
  });
});

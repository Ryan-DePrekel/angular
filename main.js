var app = angular.module("MyApp", []);

var $http = angular.injector(["ng"]).get("$http");

app.controller("Controller1", function($scope, $filter){
	$scope.greeting = "Hello ";
	$scope.names = [];
	$scope.date = $filter('date')(new Date(), "EEEE");

	$scope.getName = function() {
		return $scope.name + "memer";
	}

	$scope.addMemer = function(){
		$scope.names.push({
							name: $scope.name,
							color: $scope.color
							});
	}

	$scope.in_office = []

	$scope.getPeople = function (){
		$http.get("http://shrek.dhcp.io:5001/json").success(function(data, status, headers, config){
			$scope.in_office = data["registered"];
			console.log(data["registered"]);
		});
	}

	$scope.templates = 
		[{name: 'template1', url: 'template1.html'},
		 {name: 'template2', url: 'template2.html'}];
	$scope.template = $scope.templates[0];

	$scope.displayTemplate = function(templateIndex){
		$scope.template = $scope.templates[templateIndex];
	}
});


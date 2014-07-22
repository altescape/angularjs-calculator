'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
	.controller('MyCtrl1', ['$scope', 'fortyTwo', function ($scope, fortyTwo) {
		$scope.number = fortyTwo.doSomething();
		$scope.another_number = fortyTwo.doSomethingElse();
		$scope.result_number = 0;
		$scope.inputed_number = 0;

		$scope.doSomethingAnotherThing = function (number) {
			return $scope.inputed_number = number;
		};

		$scope.doSumOnNumber = function () {
			return $scope.result_number = $scope.number + $scope.another_number + $scope.inputed_number;
		};

		$scope.doSumOnNumber();

	}])
	.controller('MyCtrl2', ['$scope', function ($scope) {

	}]);

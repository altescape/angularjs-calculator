'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myApp.services', [])
	.value('version', '0.1')
	.factory('fortyTwo', function () {
		return {
			a_number : 0,
			doSomething: function () {
				return 42;
			},
			doSomethingElse : function () {
				return this.a_number = 2;
			},
			doSum : function (num1, num2, num3) {
				return num1 + num2 * num3;
			}
		}
	});


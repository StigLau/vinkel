var myApp = angular.module('myApp', []);
myApp.factory('Data', function() {
		return {message:"I'm data from a service"}
})

function secondCtrl($scope, Data) {
		$scope.data = Data;
		
		$scope.reversedMessage = function(message) {
			return message.split("").reverse().join("");
		}
}
			
angular.module('internApp', ['ui.router'])

.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider,$urlRouterProvider) {
	
	$stateProvider

		.state('entry', {
			url: '/',
			templateUrl: 'views/entry.html',
			controller: function ($scope, $state) {
				$scope.save = function () {
					alert('saved!');
					$state.go('landing')
				}
			}
		})

		.state('landing', {
			url: '/landing',
			templateUrl: 'views/landing.html',
		})

		.state('updateprofile', {
			url: '/update',
			templateUrl: 'views/update.html',
			controller: function ($scope, $state) {
				$scope.save = function () {
					alert('saved!');
					$state.go('landing')
				}
			}
		})

		.state('viewfriends', {
			url: '/view',
			templateUrl: 'views/view.html',
		})

		.state('findfriends', {
			url: '/find',
			templateUrl: 'views/find.html',
		})

		$urlRouterProvider.otherwise('/')

}])
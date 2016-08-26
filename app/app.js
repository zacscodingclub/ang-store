'use strict';

// Declare app level module which depends on views, and components
angular.module('storeTemplate', [
  'ngRoute',
  'storeTemplate.view1',
  'storeTemplate.view2',
  'storeTemplate.templates'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/templates'});
}]);

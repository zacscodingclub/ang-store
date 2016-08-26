'use strict';

angular.module('storeTemplate', [
  'ngRoute',
  'storeTemplate.view1',
  'storeTemplate.view2',
  'storeTemplate.templates'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/templates'});
}]);

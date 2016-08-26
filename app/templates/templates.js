angular
  .module('storeTemplate.templates', ['ngRoute'])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.
      when('/templates', {
        templateUrl: 'templates/templates.html',
        controller: 'TemplatesCtrl'
      }).
      when('/templates/:templateId', {
        templateUrl: 'templates/template-details.html',
        controller: 'TemplateDetailsCtrl'
      })
  }])
  .controller('TemplatesCtrl', ['$scope', '$http', function($scope, $http) {
    $http.get('json/templates.json').then(function(response) {
      $scope.templates = response.data;
    })
  }])
  .controller('TemplateDetailsCtrl', ['$scope', function($scope) {
  }])

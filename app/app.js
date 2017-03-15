'use strict';


var app = angular.module('senatorApp',[
  'ngRoute',
  'senatorApp.searchView',
  'senatorApp.view2'
])

app.config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/view2'});
}]);

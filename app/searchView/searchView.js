'use strict';

angular.module('senatorApp.searchView', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/searchView', {
    templateUrl: 'searchView/searchView.html',
    controller: 'searchViewCtrl'
  });
}]).controller('searchViewCtrl', [function() {

}]);
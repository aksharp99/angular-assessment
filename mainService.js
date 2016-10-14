angular.module('assessment').service('mainService', function($http) {

this.getProducts = function() {
  return $http({
    method: 'GET',
    url: 'http://practiceapi.devmounta.in/products'
  })
}

this.getId = function() {
  return $http({
    method:'GET',
    url: 'http://practiceapi.devmounta.in/products'
  })
}

})

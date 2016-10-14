angular.module('assessment').directive('productDirective', function() {
  return {
    restrict: 'AE',
    templateUrl: './views/product-details.html',
    scope: {
      dayAlert: '&',
      anotherAlert: '&'
    }



  }
})

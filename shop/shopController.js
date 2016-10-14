angular.module('assessment').controller('shopController', function($scope, mainService, $stateParams) {


  $scope.test = "This is the shop page!";
  $scope.getProducts = function() {

    mainService.getProducts().then(function(response) {

      $scope.products = response.data;

    })
  }
  $scope.getProducts();

  $scope.whenClicked = function() {
    $scope.biker = true;
  }

  $scope.whenClickedAgain = function() {
    $scope.biker = false;
  }
})

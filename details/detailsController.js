angular.module('assessment').controller('detailsController', function($scope, mainService, $stateParams) {

  $scope.getProducts = function() {

    mainService.getProducts().then(function(response) {
      console.log('this is the fucking response: ',response);

        for(var i = 0; i <response.data.length; i++) {
          if($stateParams.id == response.data[i].id) {
              // $scope.books = mainSrv.travelInfo[i];
              $scope.image = response.data[i].image;
              $scope.title = response.data[i].title;
              $scope.desc = response.data[i].desc;
              $scope.price = response.data[i].price;
        }
      }

      $scope.products = response.data;

    })
  }


  $scope.announceDay = function() {
    $scope.getProducts();
  }

$scope.announceDay();







})

angular.module('assessment',['ui.router'])
.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');

  $stateProvider
  .state('home',{
    controller: 'homeController',
    url:'/',
    templateUrl: './views/home.html'
  })

  .state('about',{
    controller: 'aboutController',
    url:'/about',
    templateUrl: './views/about.html'
  })

  .state('blog',{
    controller: 'blogController',
    url:'/blog',
    templateUrl: './views/blog.html'
  })

  .state('shop',{
    controller: 'shopController',
    url:'/shop',
    templateUrl: './views/shop.html'
  })

  .state('details',{
    controller: 'detailsController',
    url:'/details/:id',
    templateUrl: './views/product-details.html'
  })

})

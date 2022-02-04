angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})
.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Wild Man Blues', id: 1 },
    { title: 'Metal Tornado', id: 2 },
    { title: 'Black Widow', id: 3 },
    { title: 'Avengers', id: 4 },
    { title: 'SpiderMan3', id: 5 },
    { title: 'Sonic', id: 6 },
    { title: 'Batman', id: 7 },
    { title: 'Skyfall', id: 8 },
    { title: 'Transformers', id: 9 },
    { title: 'Capitana Marvel', id: 10 },
    { title: 'El Señor de los Anillos', id: 11 },
    { title: 'Aquaman', id: 12 },
    { title: 'Capitán América', id: 13 },
    { title: 'Los Minions', id: 14 },
    { title: 'Iron Man 3', id: 15 },
    { title: 'Fast & Furious 8', id: 16 },
    { title: 'Los Increíbles 2', id: 17 },
  ];
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
});

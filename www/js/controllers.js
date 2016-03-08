angular.module('starter.controllers', [])

.controller('ModalOneCtrl', function($scope, $ionicModal, $timeout) {

  $scope.profil = {};

  $ionicModal.fromTemplateUrl('templates/modalOne.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  $scope.OpenModal = function(){
    $scope.modal.show();
  };

  $scope.CloseModal = function(){
    $scope.modal.hide();
  };
})

.controller('ModalTwoCtrl', function($scope, $ionicModal, $timeout) {

  $scope.profil = {};

  $ionicModal.fromTemplateUrl('templates/modalTwo.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  $scope.OpenModal = function(){
    $scope.modal.show();
  };

  $scope.CloseModal = function(){
    $scope.modal.hide();
  };
})

.controller('ModalThreeCtrl', function($scope, $ionicModal, $timeout) {

  $scope.profil = {};

  $ionicModal.fromTemplateUrl('templates/modalThree.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  $scope.OpenModal = function(){
    $scope.modal.show();
  };

  $scope.CloseModal = function(){
    $scope.modal.hide();
  };
})

.controller('RegisterCtrl', function($scope, $ionicLoading, $state, $location){
  $scope.submit = function(prenom, nom){
    $ionicLoading.show({
      template: '<ion-spinner icon="android"></ion-spinner>',
      duration: 1500
    });
    $state.go('registers', {prenom: prenom, nom: nom});
  }
})

.controller('RegistersCtrl', function($scope, $stateParams){
  $scope.prenom = $stateParams.prenom;
  $scope.nom = $stateParams.nom;
});
angular.module('starter.controllers', [])

.controller('RegisterCtrl', function($scope, $ionicModal, $timeout) {

  $ionicModal.fromTemplateUrl('templates/register.html', {
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

  $scope.submit = function(email, password, lastName, firstName, profession, practiceLocation){

    var perso = {
      'email': email,
      'password': password,
      'lastName': lastName,
      'firstName': firstName,
      'profession': profession,
      'practiceLocation': practiceLocation
    };

    window.localStorage.setItem('perso', JSON.stringify(perso));

  };

})

/*.controller('RegisterCtrl', function($scope, $ionicLoading, $state, $location){
  $scope.submit = function(prenom, nom){
    $ionicLoading.show({
      template: '<ion-spinner icon="android"></ion-spinner>',
      duration: 1500
    });
    $state.go('registers', {prenom: prenom, nom: nom});
  }
})*/
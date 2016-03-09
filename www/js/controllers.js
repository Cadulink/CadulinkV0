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

  $scope.submit = function(email, password, nom, prenom, profession, lieuExercice){

    var perso = {
      'email': email,
      'password': password,
      'nom': nom,
      'prenom': prenom,
      'profession': profession,
      'lieuExercice': lieuExercice
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
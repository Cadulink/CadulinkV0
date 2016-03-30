angular.module('starter.controllers', ['ngRoute'])

.controller('LogCtrl', function($scope, $location, $stateParams, PersonService) {
  $scope.submit = function(email, password) {
    //var people = JSON.parse(localStorage.getItem('people'));
    var error = true;

    for (var i = 0; i < PersonService.get().length; i++) {
      if (email == PersonService.getId(i).email && password == PersonService.getId(i).password) {
        error = false;
        userId = i;
        localStorage.setItem("userId", JSON.stringify(userId));
        $location.path('app/home/');
      }
    }
    if(error) {
      alert("Mauvais login/mot de passe");
    }
  }
})

.controller('MenuCtrl', function($scope, $stateParams, $location){
  $scope.profil = function(){
    $location.path('app/profil/'+userId);
  }
})

.controller('RegisterCtrl', function($scope, $ionicModal, $timeout, $location, $stateParams, PersonService) {

  $ionicModal.fromTemplateUrl('templates/register.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  $scope.title = 'Inscription';

  $scope.OpenModal = function(){
    $scope.modal.show();
  };

  $scope.CloseModal = function(){
    $scope.modal.hide();
  };

  $scope.submit = function(email, password, lastName, firstName, profession, practiceLocation){

    //var people = JSON.parse(window.localStorage.getItem('people'));
    var id = PersonService.get().length;
    $stateParams.personId = id;
    userId = id;

    PersonService.create(email, password, firstName, lastName, profession, practiceLocation);
    console.log(PersonService.getId(id).email);
    //window.localStorage.setItem('userId', JSON.stringify(people.length));
    //window.localStorage.setItem('people', JSON.stringify(people));
    $scope.modal.hide();
    $location.path('app/profil/'+$stateParams.personId);
  };
})

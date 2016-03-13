angular.module('starter.controllers', [])

.controller('RegisterCtrl', function($scope, $ionicModal, $timeout, $location) {


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

    var people = JSON.parse(window.localStorage.getItem('people'));

    people.push({
      'id': people.length,
      'email': email,
      'password': password,
      'lastName': lastName,
      'firstName': firstName,
      'profession': profession,
      'practiceLocation': practiceLocation
    });

    window.localStorage.setItem('people', JSON.stringify(people));
    $scope.modal.hide();
    $location.path('home');
    
  };

});

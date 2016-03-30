angular.module('people.controllers', ['ngRoute'])

.controller('PersonCtrl', function($scope, $stateParams, PersonService) {
    if(typeof $stateParams.personId === "undefined" || $stateParams.personId == "") {
        $stateParams.personId = userId;
    }
    $scope.userId = userId;
    $scope.PersonService = PersonService;
    $scope.person = PersonService.getId($stateParams.personId);
    $scope.communities = PersonService.getCommunities($stateParams.personId);
    $scope.joinCommunity = PersonService.joinCommunity;
    $scope.quitCommunity = PersonService.quitCommunity;
})

.controller('EditProfilCtrl', function($scope, $ionicModal, PersonService){
  $ionicModal.fromTemplateUrl('templates/register.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  $scope.email = PersonService.getId(userId).email;
  $scope.password = PersonService.getId(userId).password;
  $scope.lastName = PersonService.getId(userId).lastName;
  $scope.firstName = PersonService.getId(userId).firstName;
  $scope.profession = PersonService.getId(userId).profession;
  $scope.practiceLocation = PersonService.getId(userId).practiceLocation;

  $scope.title = 'Editer son profil';

  $scope.OpenModal = function(){
    $scope.modal.show();
  };

  $scope.CloseModal = function(){
    $scope.modal.hide();
  };

  $scope.submit = function(email, password, firstName, lastName, profession, practiceLocation) {
    PersonService.edit(userId, email, password, firstName, lastName, profession, practiceLocation);
    $scope.modal.hide();
  }
})

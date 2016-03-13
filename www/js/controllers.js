angular.module('starter.controllers', [])

//Articles pages
.controller('ArticlesCtrl', function($scope, ArticleService) {
    $scope.articles = JSON.parse(window.localStorage.getItem('articles'));
    $scope.people = JSON.parse(window.localStorage.getItem('people'));

    $scope.getAuthor = function(article) {
        var person =  ArticleService.getAuthor(article.authorId);
        return person.firstName + " " + person.lastName;
    };
})

//Profile pages
.controller('ProfilCtrl', function($scope, $stateParams, ProfilService) {
    console.log($stateParams.personId);
    $scope.person = ProfilService.get($stateParams.personId);
})

//Register page
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

    window.localStorage.setItem('userId', JSON.stringify(people.length));
    window.localStorage.setItem('people', JSON.stringify(people));
    $scope.modal.hide();
    $location.path('home');
    
  };

});

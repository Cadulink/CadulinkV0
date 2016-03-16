angular.module('starter.controllers', [])

//Articles pages
.controller('ArticlesCtrl', function($scope, $stateParams, ArticleService) {
    if($stateParams.communityId == "") {
        $scope.articles = ArticleService.getAll();
    }
    else {
        console.log($stateParams.communityId);
        $scope.articles = ArticleService.getByCommunity($stateParams.communityId);
    }

    $scope.getAuthor = function(article) {
        var person =  ArticleService.getAuthor(article.authorId);
        return person.firstName + " " + person.lastName;
    };
})

//Profile pages
.controller('PersonCtrl', function($scope, $stateParams, PersonService) {
    if($stateParams.personId == "") {
        $stateParams.personId = JSON.parse(window.localStorage.getItem('userId'));
    }
    $scope.person = PersonService.get($stateParams.personId);
    $scope.communities = PersonService.getCommunities($stateParams.personId);
})

//Community pages
.controller('CommunityCtrl', function($scope, $stateParams, CommunityService) {
    $scope.community = CommunityService.get($stateParams.communityId);
    $scope.communities = CommunityService.getCommunities($stateParams.communityId);
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

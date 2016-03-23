angular.module('starter.controllers', ['ngRoute'])

//Articles pages
.controller('ArticlesCtrl', function($scope, $stateParams, ArticleService) {
    $scope.articles = ArticleService.getByCommunity($stateParams.communityId);
    if(typeof $stateParams.communityId === "undefined" || $stateParams.communityId == "") {
        $scope.articles = ArticleService.getAll();
    }
    $scope.getPreview = function(article) {
      var preview = ArticleService.getPreview(article.id);
      return preview;
    }

    $scope.getAuthor = function(article) {
        var person =  ArticleService.getAuthor(article.authorId);
        return person.firstName + " " + person.lastName;
    }
    $scope.nbrComment = function(article){
      var nbrComments = ArticleService.nbrComment(article.authorId);
      return nbrComments;
    }
})

//One article page
.controller('AfficherCtrl', function($scope, $stateParams, ArticleService){
      $scope.articles = ArticleService.getByArticle($stateParams.articleId);
      $scope.getAuthor = function(article) {
          var person =  ArticleService.getAuthor(article.authorId);
          return person.firstName + " " + person.lastName;
      };
})

//Comment on page
.controller('CommentCtrl', function($scope, $stateParams, $location, CommentService){
      $scope.comments = CommentService.getCommentByArticle($stateParams.articleId);
      $scope.switch = function(){
        $location.path("article/"+ $stateParams.articleId + "/comment")
      }
      $scope.getAuthor = function(comment) {
          var person =  CommentService.getAuthor(comment.authorId);
          return person.firstName + " " + person.lastName;
      };
})

.controller('AddCommentCtrl', function($scope, $stateParams, $location, CommentService){
    $scope.addComment = function(){
        var content = $scope.commentInput;
        var articleId = $stateParams.articleId;
        CommentService.addComment(articleId, content, userId);
        $location.path('article/'+$stateParams.articleId);
    }

})
// delete article
.controller('DeleteCtrl', function($scope, $stateParams, ArticleService){
  var retour = ArticleService.delete($stateParams.articleId);
  if(retour == true) {
    $scope.text = "Article " + $stateParams.articleId + " supprimé";
  }
})
//Profile pages
.controller('PersonCtrl', function($scope, $stateParams, PersonService) {
    if(typeof $stateParams.personId === "undefined") {
        $stateParams.personId = userId;
    }
    $scope.PersonService = PersonService;
    $scope.person = PersonService.getId($stateParams.personId);
    $scope.communities = PersonService.getCommunities($stateParams.personId);
    $scope.joinCommunity = PersonService.joinCommunity;
    $scope.quitCommunity = PersonService.quitCommunity;
})

//Community pages
.controller('CommunityCtrl', function($scope, $stateParams, $ionicHistory, CommunityService) {
    if($stateParams.communityId == "") {
        $stateParams.communityId = 1;
    }
    $scope.community = CommunityService.get($stateParams.communityId);
    $scope.communities = CommunityService.getCommunities($stateParams.communityId);
    $scope.goBack = function() {
        $ionicHistory.goBack();
    };
})

//Register page
.controller('RegisterCtrl', function($scope, $ionicModal, $timeout, $location, $stateParams, PersonService) {


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

    //var people = JSON.parse(window.localStorage.getItem('people'));
    id = PersonService.get().length;
    userId = JSON.parse(localStorage.getItem('userId'));
    userId = id;
    window.localStorage.setItem('userId', JSON.stringify(userId));

    PersonService.create(email, password, firstName, lastName, profession, practiceLocation);
    console.log(PersonService.getId(id).email);
    //window.localStorage.setItem('userId', JSON.stringify(people.length));
    //window.localStorage.setItem('people', JSON.stringify(people));
    $scope.modal.hide();
    $location.path('profil/'+$stateParams.personId);
  };

})

.controller('LogCtrl', function($scope, $location, PersonService) {
  $scope.submit = function(email, password) {
    var error = true;

    for (var i = 0; i < PersonService.get().length; i++) {
      if (email == PersonService.getId(i).email && password == PersonService.getId(i).password) {

        error = false;
        userId = people[i].id;
        localStorage.setItem(userId, JSON.stringify('userId'));
        $location.path('home/');
      }
    }
    if(error) {
      alert("Mauvais login/mot de passe");
    }
  }

})

.controller('EditProfilCtrl', function($scope, $ionicModal, PersonService){

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

});

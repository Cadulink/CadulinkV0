angular.module('starter.controllers', ['ngRoute'])

//Articles pages
.controller('ArticlesCtrl', function($scope, $stateParams, ArticleService) {
    if($stateParams.communityId == "") {
        $scope.articles = ArticleService.getAll();
    }
    else {
        console.log($stateParams.communityId);
        $scope.articles = ArticleService.getByCommunity($stateParams.communityId);
    }
    $scope.getPreview = function(article) {
      var preview = ArticleService.getPreview(article.id);
      return preview;
    }
    $scope.getAuthor = function(article) {
        var person =  ArticleService.getAuthor(article.authorId);
        return person.firstName + " " + person.lastName;
    }
})

.controller('AfficherCtrl', function($scope, $stateParams, ArticleService){
  $scope.articles = ArticleService.getByArticle($stateParams.articleId);
  $scope.getAuthor = function(article) {
      var person =  ArticleService.getAuthor(article.authorId);
      return person.firstName + " " + person.lastName;
  }
})
//Profile pages
.controller('PersonCtrl', function($scope, $stateParams, PersonService) {
    if($stateParams.personId == "") {
        $stateParams.personId = JSON.parse(window.localStorage.getItem('userId'));
    }
    $scope.person = PersonService.get($stateParams.personId);
    $scope.communities = PersonService.getCommunities($stateParams.personId);
})

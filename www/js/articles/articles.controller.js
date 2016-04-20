angular.module('articles.controllers', ['ngRoute'])

//Articles pages
.controller('ArticlesCtrl', function($scope, $stateParams, ArticleService) {
    $scope.userId =  userId;
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
    $scope.getImageArticle = function(article){
      var imageArticle = ArticleService.getImage(article.authorId);
      return imageArticle;
    }
    $scope.nbrComment = function(article){
      var nbrComments = ArticleService.nbrComment(article.authorId);
      return nbrComments;
    }
    $scope.getCommunity = function(article){
      var community = ArticleService.getCommunity(article);
      return community;
    }
})

//One article page
.controller('AfficherCtrl', function($scope, $stateParams, ArticleService){
      $scope.articles = ArticleService.getByArticle($stateParams.articleId);
      console.log($stateParams);
      $scope.getAuthor = function(article) {
          var person =  ArticleService.getAuthor(article.authorId);
          return person.firstName + " " + person.lastName;
      };
      $scope.getImageArticle = function(article){
        var image = ArticleService.getImage(article.authorId);
        return image;
      }
      $scope.getCommunity = function(article){
        var community = ArticleService.getCommunity(article);
        return community;
       }
})
.controller('NewCtrl', function($scope, $stateParams, ArticleService){
    $scope.submit = function(title , content) {
        console.log("t" + title);
        ArticleService.new(0,userId,title,content);
    }
})
// edit article
.controller('EditArticleCtrl', function($scope, $stateParams, ArticleService){
  $scope.article = ArticleService.get($stateParams.articleId);
    $scope.submit = function(title , content) {
        ArticleService.edit(articleId,0,userId,title,content);
    }
})
// delete
.controller('DeleteCtrl', function($scope, $stateParams, ArticleService){
  var retour = ArticleService.delete($stateParams.articleId);
  if(retour == true) {
    $scope.text = "Article " + $stateParams.articleId + " supprimé";
  }
})

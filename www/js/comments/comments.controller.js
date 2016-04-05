angular.module('comments.controllers', ['ngRoute'])

.controller('CommentCtrl', function($scope, $stateParams, $location, CommentService){
      $scope.comments = CommentService.getCommentByArticle($stateParams.articleId);
      $scope.userId =  userId;
      $scope.switch = function(){
        $location.path("app/article/"+ $stateParams.articleId + "/comment")
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
        console.log("Id" + articleId);
        $location.path("app/article/" + articleId);
    }

})

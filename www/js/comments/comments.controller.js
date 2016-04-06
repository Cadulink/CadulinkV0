angular.module('comments.controllers', ['ngRoute'])

.controller('CommentCtrl', function($scope, $stateParams, $location, CommentService){
      $scope.comments = CommentService.getCommentByArticle($stateParams.articleId);
      $scope.userId =  userId;
      $scope.edit= false;
      console.log($scope.edit);
      $scope.switch = function(){
        $location.path("app/article/"+ $stateParams.articleId + "/comment")
      }
      $scope.switchEdit = function(id){
        $scope.edit=true;
        console.log($scope.edit);
        console.log($scope.commentInput);
      }
      $scope.editComment = function(id){
        console.log(comments[id])
        $scope.edit = false;
        var id = id;
        var content = $scope.comments.content;
        var authorId = comments[id].authorId;
        var articleId = comments[id].articleId;
        console.log(content);
        CommentService.edit(id, authorId, articleId, content);
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

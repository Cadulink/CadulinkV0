angular.module('comments.controllers', ['ngRoute'])

.controller('CommentCtrl', function($scope, $stateParams, $location, CommentService, $route){
        $scope.comments = CommentService.getCommentByArticle($stateParams.articleId);
        $scope.userId =  userId;
        $scope.switch = function(){
        $location.path("app/article/"+ $stateParams.articleId + "/comment")
      }
      $scope.switchEdit = function(id){
        $scope.idEdit = id;
        console.log(comments.length);
      }
      $scope.editComment = function(id){
        $scope.comment = {
            id : comments[id].id,
            authorId: comments[id].authorId,
            articleId: comments[id].articleId,
            content: comments[id].content
        };
        console.log($scope.comment);
        CommentService.edit(id,$scope.comment);
        $scope.idEdit = "";
      }
      $scope.getImageComment = function(comment){
        var imageComment = CommentService.getImage(comment.authorId);
        return imageComment;
      }
      $scope.getAuthor = function(comment) {
          var person =  CommentService.getAuthor(comment.authorId);
          return person.firstName + " " + person.lastName;
      };

})
.controller('DeleteCommentCtrl', function($scope, $stateParams,$location, CommentService){
  var texte = comments[$stateParams.commentDeleteId].content
  var comment = '';
  for (var i = 3; i < (comments[$stateParams.commentDeleteId].content).length -4 ; i++) {
    comment = comment + texte[i];
  }
  $scope.texte = 'Supprimer le commentaire "'+ comment + "?" + '"';
  $scope.deleteComment = function(){
  CommentService.delete($stateParams.commentDeleteId);
  $scope.texte = 'Commentaire supprimer';
  }
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

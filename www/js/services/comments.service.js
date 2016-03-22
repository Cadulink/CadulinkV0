angular.module('comment.service', ['articles.data', 'communities.data', 'people.data','comments.data'])

.factory('CommentService', function() {
    return {
      getAll: function(){
        return comments;
      },
      getCommentByArticle: function(articleId){
        var commentsArticle = [];
        comments.forEach(function(element, key, array){
          if(element.articleId == articleId){
              commentsArticle.push(element);
              console.log(commentsArticle);
          }
        })
        return commentsArticle;
      }
    };
});

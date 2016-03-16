angular.module('people.service', ['articles.data', 'communities.data', 'people.data', 'comment.data'])

.factory('CommentService', function() {
    return{
      getAllComment: function(){
        return comments;
      }
      getCommentByArticles: function(commentId, articleId){
        articleComment = [];
        for(var i = 0; i < comments.length; i++){
          if(comments[i].ArticleId == articleId){
              articleComment.push(comment[i]);
          }
        }
          return articleComment;
      }
      addComment: function(authorId, articleId, content){
        articleComment.push({
        'id' : comment.[comment.lenght - 1].id + 1;
        })
      }

    }
}

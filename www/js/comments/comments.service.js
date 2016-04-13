angular.module('comment.service', ['articles.data', 'communities.data', 'people.data','comments.data'])

.factory('CommentService', function() {
    return {
      get: function(id){
        return comments[id];
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
      },
      getAuthor: function(personId) {
          return people[personId];
      },

      delete: function(commentId) {
        for( i=0 ; i<=comments.length;i++){
          if (comments[i].id == commentId){
            comments.splice(i, 1);
            console.log("after salut:" + comments);
            return true;
          }
        }
      },
      edit: function(id,content){
          if(content == ""){
            alert("ERREUR")
          }
          else
          {
            comments[id] = content;
          }
      },
      addComment: function(articleId, content, userId){
        var newComment =
        {
          'id' : comments.length + 1,
          'authorId' : userId,
          'articleId': articleId,
          'content' : "<p>"+content+"</p>"
        }
        console.log("Salut" +userId);
        comments.push(newComment);
        console.log(comments);
		}
  };
  });

angular.module('articles.service', ['articles.data', 'communities.data', 'people.data'])

.factory('ArticleService', function() {
    return {
        getAll: function() {
            return articles;
        },
        getByCommunity: function(communityId) {
            subArticles = [];
            articles.forEach(function(element, index, array) {
                if(element.communityId == communityId) {
                    subArticles.push(element);
                }
            });
            return subArticles;
        },
        get: function(articleId) {
          return null;
        },
        getAuthor: function(personId) {
            return people[personId];
        },
        getByArticle: function(articleId){
          for(var i = 0; i < articles.length; i++)
          {
            if(articles[i].id == articleId) {
              return articles[i];
            }
          }
        },
        getPreview: function(articleId){
          for(var i = 0; i < articles.length; i++)
          {
            if(articles[i].id == articleId) {
              retour = articles[i].content.substring(0,300) + '...<a>Lire la suite </a></p>';
              return retour;
            }
          }
        },
// FUNCTION edit un article
        new: function(communityId,authorId,newTitle,newContent) {
          if (newTitle == "") {
            alert("Le titre est obligatoire");
          }
          else {
            var newId=(articles.length -1 ) + 1;
            var articleDate=Date.now();
            var newArticle= {
              "id": newId,
              "communityId":communityId,
              "authorId": userId,
              "title": newTitle,
              "content": newContent,
              "date": articleDate,
            }
            articles.push(newArticle);
          }
        },
        // edit: function(articleId) {
        //
        // },
// function delete pour un article
        delete: function(articleId) {
          for( i=0 ; i<=articles.length;i++){
            if (articles[i].id == articleId){
              console.log("AAA" + i);
              // delete articles[i];
              articles.splice(i, 1);
              window.localStorage.setItem('articles',JSON.stringify(articles));
              return true;
            }
          }
        }
      };
    });

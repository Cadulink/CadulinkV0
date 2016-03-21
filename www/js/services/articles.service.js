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

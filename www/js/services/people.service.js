angular.module('people.service', ['articles.data', 'communities.data', 'people.data'])

.factory('PersonService', function() {
    return {
        get: function(personId=0) {
            return people[personId];
        },
        getCommunities(personId=0){
            subCommunities = [];
            people[personId].communities.forEach(
                function (element, index, array) {
                    subCommunities.push(communities[element]);
                }
            );
            return subCommunities;
        }
    };
});

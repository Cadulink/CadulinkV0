angular.module('people.service', ['articles.data', 'communities.data', 'people.data'])

.factory('PersonService', function() {
    return {
        get: function(personId=0) {
            return people[personId];
        },
        getCommunities(personId){
            subCommunities = [];
            people[personId].communities.forEach(
                function (element, index, array) {
                    subCommunities.push(communities[element]);
                }
            );
            return subCommunities;
        },
        isInCommunity(personId,communityId) {
            if(people[personId].communities.indexOf(communityId) != -1) {
                return true;
            }
            else {
                return false;
            }
        },
        joinCommunity(personId,communityId) {
            people[pesonId].communities.push(communityId);
            return true;
        },
        quitCommunity(personId,communityId) {
            for(var i=0;i<people[personId].communities.length;i++) {
                if(people[personId].communities[i] == communityId) {
                    people[personId].communities.splice(i,1);
                    return true;
                }
            }
            return false;
        }
    };
});

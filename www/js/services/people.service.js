angular.module('people.service', ['articles.data', 'communities.data', 'people.data'])

.factory('PersonService', function() {
    return {
        get: function(personId) {
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
            people[personId].communities.push(communityId);
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

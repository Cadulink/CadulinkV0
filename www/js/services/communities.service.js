angular.module('communities.service', ['articles.data', 'communities.data', 'people.data'])

.factory('CommunityService', function() {
    return {
        get: function(communityId) {
            return communities[communityId];
        },
        getCommunities(communityId){
            subCommunities = [];
            communities[communityId].relatedCommunities.forEach(
                function (element, index, array) {
                    subCommunities.push(communities[element]);
                }
            );
            return subCommunities;
        }
    };
});

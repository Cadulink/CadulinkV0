angular.module('communities.service', ['articles.data', 'communities.data', 'people.data'])

.factory('CommunityService', function() {
    return {
        get: function(communityId) {
            return communities[communityId];
        },
        getCommunities(communityId=0){
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

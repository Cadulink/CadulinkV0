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
        },
        edit(communityId,label,description,communityManagerId) {
            communities[communityId].id = id;
            communities[communityId].label = label;
            communities[communityId].description = description;
            communities[communityId].communityId = communityId;
            return true;
        }
    };
});

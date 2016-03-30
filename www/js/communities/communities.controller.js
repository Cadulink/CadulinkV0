angular.module('communities.controllers', ['ngRoute'])

.controller('CommunityCtrl', function($scope, $stateParams, $ionicHistory, CommunityService) {
    console.log("cId" + $stateParams.communityId);
    if($stateParams.communityId == "") {
        $stateParams.communityId = 1;
    }
    $scope.community = CommunityService.get($stateParams.communityId);
    $scope.communities = CommunityService.getCommunities($stateParams.communityId);
    $scope.goBack = function() {
        $ionicHistory.goBack();
    };
})

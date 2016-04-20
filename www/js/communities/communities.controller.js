angular.module('communities.controllers', ['ngRoute'])

.controller('CommunityCtrl', function($scope, $stateParams, $ionicHistory, CommunityService) {
  var community = CommunityService.get($stateParams.communityId);
  $scope.members = CommunityService.getMember($stateParams.communityId);
  $scope.nbrMembre = CommunityService.getNbrMember($stateParams.communityId);
  $scope.animator = CommunityService.getAnimator(community.communityManagerId);
  console.log(community);
    console.log("cId :" + $stateParams.communityId);
    if($stateParams.communityId == "") {
        $stateParams.communityId = 1;
    }
    $scope.community = CommunityService.get($stateParams.communityId);
    $scope.communities = CommunityService.getCommunities($stateParams.communityId);
    $scope.goBack = function() {
        $ionicHistory.goBack();
    };

})

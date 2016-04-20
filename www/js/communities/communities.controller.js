angular.module('communities.controllers', ['ngRoute'])

.controller('CommunityCtrl', function($scope, $stateParams, $ionicHistory, CommunityService){
  $scope.userId = userId;
  var community = CommunityService.get($stateParams.communityId);
  $scope.members = CommunityService.getMember($stateParams.communityId)
  $scope.nbrMembre = CommunityService.getNbrMember($stateParams.communityId);
  $scope.animator = CommunityService.getAnimator(community.communityManagerId);
  $scope.labelisateur = CommunityService.getLabelisateur(community.labelisateur);
  $scope.admin = CommunityService.getAdmin(community.adminId);
    if($stateParams.communityId == "") {
        $stateParams.communityId = 1;
    }
    $scope.community = CommunityService.get($stateParams.communityId);
    $scope.communities = CommunityService.getCommunities($stateParams.communityId);
    $scope.goBack = function() {
        $ionicHistory.goBack();
    };
    $scope.remove = function(id){
        CommunityService.removeMember(id, $stateParams.communityId);
    }

})

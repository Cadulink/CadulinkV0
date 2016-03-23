// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var exampleApp = angular.module('starter', ['ionic','ngRoute', 'ngCordova', 'starter.controllers','starter.services','articles.service','communities.service','people.service', 'comment.service'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})



.config(function($stateProvider, $urlRouterProvider) {
    // connection
    $stateProvider
        .state('connect', {
            url: '/connect',
            templateUrl: 'templates/connect.html'
        })
    // register
    .state('register', {
        url: '/register',
        templateUrl: 'templates/register.html'
    })
    // mot de passe oublié
    .state('forgotPassword', {
        url: '/forgotPassword',
        templateUrl: 'templates/forgotPassword.html'
    })

    // home
    .state('home', {
        url: '/home/:communityId',
        templateUrl: 'templates/home.html',
        controller: 'ArticlesCtrl'
    })
    // community
    .state('community', {
        cache: false,
        url: '/community/:communityId',
        templateUrl: 'templates/community.html',
        controller: 'CommunityCtrl'
    })
    // community edit
    .state('communityEdit', {
        url: '/communityEdit/:communityId',
        templateUrl: 'templates/communityEdit.html',
        controller: 'CommunityCtrl'
    })

    // article
    .state('article', {
        cache: false,
        url: '/article/:articleId',
        templateUrl: 'templates/article.html',
        controller:'AfficherCtrl'
    })
    // profil
    .state('profil', {
        cache: false,
        url: '/profil/:personId',
        templateUrl: 'templates/profil.html',
        controller: 'PersonCtrl'
    })
// delete
    .state('delete', {
        url: '/delete/:articleId',
        templateUrl: 'templates/delete.html',
        controller: 'DeleteCtrl'
    })
    .state('addComment',{
        url: '/article/:articleId/comment',
        templateUrl: 'templates/addComment.html'
    })

    // photo api
    .state('photo', {
        url: '/photo',
        templateUrl: 'templates/photo.html'
    });

    $urlRouterProvider.otherwise('/connect')
});
// fonction appareil photo
exampleApp.controller("ExampleController", function($scope, $cordovaCamera) {
    $scope.takePicture = function() {
        var options = {
            quality : 75,
            destinationType : Camera.DestinationType.DATA_URL,
            sourceType : Camera.PictureSourceType.CAMERA,
            allowEdit : true,
            encodingType: Camera.EncodingType.JPEG,
            targetWidth: 300,
            targetHeight: 300,
            popoverOptions: CameraPopoverOptions,
            saveToPhotoAlbum: false
        };

        $cordovaCamera.getPicture(options).then(function(imageData) {
            $scope.imgURI = "data:image/jpeg;base64," + imageData;
        }, function(err) {
            // An error occured. Show a message to the user
        });
    }

});

var userId = "";
window.localStorage.setItem("userId", JSON.stringify(userId));

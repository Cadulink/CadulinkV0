// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var exampleApp = angular.module('starter', ['ionic', 'ngCordova', 'starter.controllers','starter.services','articles.service','communities.service','people.service'])

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

  // Annonce
  .state('annoncePage', {
      url: '/annoncePage',
      templateUrl: 'templates/annonce.html'
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
        url: '/community/:communityId',
        templateUrl: 'templates/community.html',
        controller: 'CommunityCtrl'
    })

    // article
    .state('article', {
        url: '/article',
        templateUrl: 'templates/article.html'
    })

    // agenda
    .state('agenda', {
        url: '/agenda',
        templateUrl: 'templates/agenda.html'
    })

    // profil
    .state('profil', {
        url: '/profil/:personId',
        templateUrl: 'templates/profil.html',
        controller: 'PersonCtrl'
    })

    // photo api
    .state('photo', {
        url: '/photo',
        templateUrl: 'templates/photo.html'
    });

    $urlRouterProvider.otherwise('/annoncePage')
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

var userId = 0;
window.localStorage.setItem("userId", JSON.stringify(userId));

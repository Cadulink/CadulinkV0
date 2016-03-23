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
    $stateProvider
        // menu
        .state('app', {
            url: '/app',
            templateUrl: 'templates/menu.html'
        })
        // connection
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
        .state('app.home', {
            url: '/home/:communityId',
            views: {
                'menuContent': {
                    templateUrl: 'templates/home.html'
                }
            },
            controller: 'ArticlesCtrl'
        })
        // community
        .state('app.community', {
            cache: false,
            url: '/community/:communityId',
            views: {
                'menuContent': {
                    templateUrl: 'templates/community.html'
                }
            },
            controller: 'CommunityCtrl'
        })
        // community edit
        .state('app.communityEdit', {
            url: '/communityEdit/:communityId',
            views: {
                'menuContent': {
                    templateUrl: 'templates/communityEdit.html'
                }
            },
            controller: 'CommunityCtrl'
        })
        // article
        .state('app.article', {
            url: '/article/:articleId',
            views: {
                'menuContent': {
                    templateUrl: 'templates/article.html'
                }
            },
            controller:'AfficherCtrl'
        })
        // profil
        .state('app.profil', {
            cache: false,
            url: '/profil/:personId',
            views: {
                'menuContent': {
                    templateUrl: 'templates/profil.html'
                }
            },
            controller: 'PersonCtrl'
        })
        // new
        .state('app.newArticle', {
          url: '/newArticle',
          templateUrl: 'templates/newArticle.html',
          controller: 'NewCtrl'
        })
        // delete
        .state('app.delete', {
            url: '/delete/:articleId',
            views: {
                'menuContent': {
                    templateUrl: 'templates/delete.html'
                }
            },
            controller: 'DeleteCtrl'
        })
        .state('app.addComment',{
            url: '/article/:articleId/comment',
            views: {
                'menuContent': {
                    templateUrl: 'templates/addComment.html',
                }
            },
            controller: 'AddCommentCtrl'
        })
        // delete
        .state('app.edit', {
            url: '/edit/:articleId',
            views: {
                'menuContent': {
                    templateUrl: 'templates/articleEdit.html',
                }
            },
            controller: 'EditArticleCtrl'
        })
        // photo api
        .state('app.photo', {
            url: '/photo',
            views: {
                'menuContent': {
                    templateUrl: 'templates/photo.html'
                }
            }
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

var userId = '';
window.localStorage.setItem("userId", JSON.stringify(userId));

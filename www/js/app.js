// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic', 'ngCordova', 'starter.controllers'])

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
// mots de passe oublié
  .state('forgotPassword', {
    url: '/forgotPassword',
      templateUrl: 'templates/forgotPassword.html'
  })
// home
.state('home', {
  url: '/home',
    templateUrl: 'templates/home.html'
})

// community
.state('community', {
  url: '/community',
    templateUrl: 'templates/community.html'
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
// messenger
.state('messenger', {
  url: '/messenger',
    templateUrl: 'templates/messenger.html'
})
// profil
.state('profil', {
  url: '/profil',
    templateUrl: 'templates/profil.html'
})
// photo api
.state('photo', {
  url: '/photo',
    templateUrl: 'templates/photo.html'
});
  $urlRouterProvider.otherwise('/connect')

});

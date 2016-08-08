var app = angular.module('scoretrack', ['ionic']);

app.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
    Parse.initialize("5zsh8xp1rfevjd9m0haohl9i2tgi5da1cqhxlkd6","hb0tpmflqwz7uhhpke8zisxk9i5p7hc24l5ltgei");
  });
});

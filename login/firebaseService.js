var app = angular.module('invigilatorApp');

app.service('firebaseService', function ($firebase, $firebaseObject, $firebaseArray) {
  var firebaseUrl = 'https://invigilator-project.firebaseio.com/';

  this.getUser = function(userId){
    return $firebaseObject(new Firebase(firebaseUrl + 'users/' + userId));
  };

  this.getThings = function(userId){
    return $firebaseArray(new Firebase(firebaseUrl + 'users/' + userId + '/things'));
  }
})

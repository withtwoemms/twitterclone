var app = angular.module('app', [])

//services allow for separate instances of global objects such as $http
app.service('PostsSvc', function($http) {
  this.fetch = function() {
    return $http.get('/api/posts')
  }
  this.create = function(post) {
    return $http.post('/api/posts', post)
  }
}) 

app.controller('PostCtrl', function($scope, PostsSvc) {

  //promise
  PostsSvc.fetch().success(function(posts) {
    $scope.posts = posts
  }).error(function(err) {
    $scope.posts = err
  })

  //promise
  $scope.addPost = function() {
    if ($scope.postBody) {
      PostsSvc.create({
        username: 'withtwoemms',
        body: $scope.postBody
      }).success(function() {
        $scope.posts.unshift(post)
        $scope.postBody = null
      })
    }
  }

})

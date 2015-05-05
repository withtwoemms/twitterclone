var app = angular.module('app', [])

app.controller('NameCtrl', function($scope, $http) {

  //promise
  $http.get('http://localhost:3000/api/posts').success(function(posts) {
    $scope.posts = posts
  }).error(function(err) {
    $scope.posts = err
  })

  //promise
  $scope.addPost = function() {
    if ($scope.postBody) {
      $http.post('/api/posts', {
        username: 'withtwoemms',
        body: $scope.postBody
      }).success(function() {
        $scope.posts.unshift(post)
        $scope.postBody = null
      })
    }
  }

})

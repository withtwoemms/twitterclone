var Post = require('../../models/post')




///* MODULE APPROACH
module.exports = function(app) {

  app.get('/api/posts', function(request,response,next) {
    Post.find()
    .sort('-date')
    .exec(function(err, posts) {
      if (err) {return next(err) }
      response.json(posts)
    })
  })

  app.get('/', function(req, res) {
    res.sendfile('layouts/posts.html') //path relative to this file (server.js)
  })

  app.post('/api/posts', function(request, response, next) {
    var post = new Post({
      username: request.body.username,
      body: request.body.body
    })
    post.save(function(err, post) {
      if (err) { return next(err) }
      response.json(201, post)
    })
  })

  // TEST POST with the following:
  //  > in a new db, an empty array is returned
  //curl -v -H "Content-Type: application/json" -XPOST --data '{"username":"withtwoemms", "body":"node server works!"}' localhost:3000/api/posts
}
//*/

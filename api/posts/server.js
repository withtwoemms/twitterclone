var express = require('express')
var bodyParser = require('body-parser')
var Post = require('./models/post')
    
var app = express()
app.use(bodyParser.json())

/***********
 * GET STUB
 ***********
app.get('/api/posts', function(request, response) {
  // response JSON stub
  response.json([ 
    {
      username: 'withtwoemms',
      body: 'node server works!'
    }  
  ])
})
*/

// NoSQL DB QUERY -- where `Post` is the model in a MongoDB store
app.get('/api/posts', function(request,response) {
  Post.find(function(err, posts) {
    if (err) {return next(err) }
    response.json(posts)
  })
})

/************
 * POST STUB
 ***********
app.post('/api/posts', function(request, response) {
  console.log('post received!')
  console.log(request.body.username)
  console.log(request.body.body)
  response.send(201)
})
*/

app.post('/api/posts', function(request, response) {
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
/*
curl -v -H "Content-Type: application/json" -XPOST --data '{"username":"withtwoemms", "body":"node server works!"}' localhost:3000/api/posts
*/

app.listen(3000, function() {
  console.log('Server listening on port', 3000)
})

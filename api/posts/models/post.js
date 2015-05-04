var db = require('../db')


// MODEL DEFINITION -- following obj is model accessible via `require`
// ...constructor (below) creates new MongoDB "document"
var Post = db.model('Post', {
  username: { type: String, required: true },
  body:     { type: String, required: true },
  date:     { type: Date, required: true, default: Date.now }
})

module.exports = Post

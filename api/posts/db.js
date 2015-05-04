var mongoose = require('mongoose')

// DATABASE ROUTE -- required in `models/post.js`
//  > this method is invoked to establish db connection 
//  > invoked upon import by model
mongoose.connect('mongodb://localhost/twitterclone', function() {
  console.log('mongodb is connected!')    
})

// MONGOOSE is the layer used to write NoSQL queries
module.exports = mongoose

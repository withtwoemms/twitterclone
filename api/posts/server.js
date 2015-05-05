var express = require('express')
var bodyParser = require('body-parser')
    
var app = express()
app.use(bodyParser.json())
app.use('/api/posts', require('./controllers/api/posts')) // route to GET and POST endpoints
app.use('/', require('./controllers/static')) // route to Angular app (static html pg)


app.listen(3000, function() {
  console.log('Server listening on port', 3000)
})

/**********************************
 * THINGS THAT BELONG IN SERVER.JS
 **********************************
    > global middleware
    > global configuration
    > port listening
    > logger setup
    > mounting controllers
*/

// load up the express framework and body-parser helper
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')

// create an instance of express to serve our end points
const app = express();
app.use(cors())
// we'll load up node's built in file system helper library here
// (we'll be using this later to serve our JSON files
const fs = require('fs');

// configure our express instance with some body-parser settings
// including handling JSON data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const appFE = express()
appFE.use(cors())
appFE.use(bodyParser.urlencoded({extended:true}));

const routesFE = require('./routes/routesFE.js')(appFE, fs)

const routes = require('./routes/routes.js')(app, fs);

const serverFE = appFE.listen(8000, () => {
  console.log('View tool at port %s...', serverFE.address().port);
});

const server = app.listen(3001, () => {
  console.log('Data served on port %s...', server.address().port);
});

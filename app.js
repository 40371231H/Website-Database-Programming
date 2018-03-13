const MongoClient = require('mongodb').MongoClient;

// database URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'school';

// function(...){...} : callbackfunction
var connectCallback = function(err, client) {
  assert.equal(null, err);
  console.log("Connected successfully to server");

  const db = client.db(dbName);

  client.close();
}

// url : connect url
MongoClient.connect(url, connectCallback);
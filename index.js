(function() {
  //bringing in the express library for me to use
  //just like bringing in jquery when we are in a browser
  let express = require("express");

  //app == whatever express returns
  let app = express();

  // default route
  app.get('/', function(req, res) {
    res.send("<div>Hello world</div>");
  })

  //http://localhost:port/api/pets
  app.get('/api/pets', function(req, res) {
    res.send({
      "data": {
        "pets": [{
          "id": 1,
          "name": "Fluffy",
          "age": 5,
          "uri": "/api/pets/1"
        }, {
          "id": 2,
          "name": "Bob",
          "age": 6,
          "uri": "/api/pets/2"
        }]
      }
    });
  })

  //http://localhost:port/api/pets/1
  app.get('/api/pets/1', function(req, res) {
    res.send({
      "id": 1,
      "name": "Fluffy",
      "age": 5,
      "type": "dog"
    });
  })

  //http://localhost:port/api/pets/2
  app.get('/api/pets/2', function(req, res) {
    res.send({
      "id": 2,
      "name": "Bob",
      "age": 6,
      "type": "cat"
    });
  })

  app.listen(4786, function() {
    console.log('Example app listening on port 4786!')
  })


})();

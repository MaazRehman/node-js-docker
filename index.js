let express = require('express');
let request = require("request");

const app = express();
const PORT = 30402;

app.get('/',  (req, res) => {
  res.send('Hello World!');
});


app.get('/test',   (req, res) => {
       request(`http://localhost:${PORT}/`,  (error, response) => {
         return assertResponseCodeToBe200(response) ?
            res.send('All good') :
            res.send('Status code was not 200, abort abort !');
      });

});

const assertResponseCodeToBe200 = (response) => {
  return (typeof response !== 'undefined' &&  response.statusCode === 200);
};

app.listen(PORT, function () {
  console.log(`App listening on port ${PORT}!`)
});

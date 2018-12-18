Install docker on your operating system and follow the steps.


mkdir automation_testing
cd automation_testing

npm init
sudo npm install express --save
sudo npm install request --save

vi index.js
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


vi Dockerfile
		FROM node:7
		WORKDIR /app
		COPY package.json /app
		RUN npm install
		COPY . /app
		CMD node index.js
		EXPOSE 30402


sudo docker build -t automation_testing .

sudo docker run -p 30402:30402 automation_testing

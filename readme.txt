sudo apt  install docker.io


mkdir automation_testing
cd automation_testing

npm init
sudo npm install express --save
sudo npm install jasmine --save
sudo npm install request --save
npm install jasmine-expect --save

vi index.js
	var express = require('express')
	var app = express()

	app.get('/', function (req, res) {
	  res.send('Hello World!')
	})

	app.listen(30402, function () {
	  console.log('app listening on port 30402!')
	})

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

// nodemon for auto server restart

// Express crush course: https://www.youtube.com/watch?v=L72fhGm1tfE
// EJS tutorial: https://scotch.io/tutorials/use-ejs-to-template-your-node-application

// express for routes
const express = require('express');
const app = express();
// const bodyParser = require('body-parser');
// const fetch = require("node-fetch");
// joins two paths
const path = require('path');
require('dotenv').config();
const axios = require('axios');

const fetchURL = require('./API/fetchURL');

const PORT_NUMBER = process.env.SERVER_PORT || 3000;

app.use(express.json());


// set the view engine to ejs
app.set('view engine', 'ejs');
// override express default views folder path
app.set('views', path.join(__dirname, '/views'));
// sets route for statics pages: https://stackoverflow.com/questions/18629327/adding-css-file-to-ejs
app.use(express.static(__dirname + '/views'));

app.get('/', function (req, res) {
    res.render('pages/index');
});

// router
app.use("/requestData", fetchURL);

app.listen(PORT_NUMBER, () => console.log("Server is running on port " + PORT_NUMBER));
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

const aaa = require('./API/fetchURL');

const Page = require('./module/page');

const PORT_NUMBER = process.env.SERVER_PORT || 3000;


// var cors = require('cors');
// app.use(cors({
//     origin: process.env.CORS_ORIGIN || `localhost:5000`,
// }));

app.use(express.json());


// set the view engine to ejs
app.set('view engine', 'ejs');
// override express default views folder path
app.set('views', path.join(__dirname, '/views'));
// sets route for statics pages: https://stackoverflow.com/questions/18629327/adding-css-file-to-ejs
app.use(express.static(__dirname + '/views'));

// Parse a request: https://stackoverflow.com/questions/9304888/how-to-get-data-passed-from-a-form-in-express-node-js
// req.body will be available 
// app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function (req, res) {
    res.render('pages/index', {
        postResult: "Fetch results will be shown here...",
        inputURL: "Type here your URL to fetch..."
    });
});

app.use("/giveData", aaa);


app.listen(PORT_NUMBER, () => console.log("Server is running on port " + PORT_NUMBER));
// express for routes
// nodemon for auto server restart
 
// Express crush course: https://www.youtube.com/watch?v=L72fhGm1tfE
// EJS and password and passport: https://www.youtube.com/watch?v=-RCnNyD0L-s
// EJS tutorial: https://scotch.io/tutorials/use-ejs-to-template-your-node-application

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
var DomParser = require('dom-parser');
const fetch = require("node-fetch");
// joins two paths
const path = require('path');
require('dotenv').config();
const Page = require('./module/page');

const PORT_NUMBER = process.env.SERVER_PORT || 3000;

const page = new Page("heyyyaa");
console.log(page.showData());

// // https://stackoverflow.com/questions/24330014/bodyparser-is-deprecated-express-4
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({
//   extended: true
// }));

// set the view engine to ejs
app.set('view engine', 'ejs');
// override express default views folder path
app.set('views', path.join( __dirname, '/views') );
// sets route for statics pages: https://stackoverflow.com/questions/18629327/adding-css-file-to-ejs
app.use(express.static(__dirname + '/views'));

app.get('/', function(req, res) {
    res.render('pages/index', { postResult: "Fetch results will be shown here..." } );
});

// about page 
app.get('/about', function(req, res) {
    res.render('pages/about');
});

// Parse a request: https://stackoverflow.com/questions/9304888/how-to-get-data-passed-from-a-form-in-express-node-js
app.use(bodyParser.urlencoded({ extended: true }));
// Form values are stored in req.body
app.post('/fetchURL', async function (req, res) {
    // Fetch requested page and return its HTML
    console.log( req.body );
    // body.req lists all element if they have theirs name (by name)
    const htlmResponse = await fetch( req.body.url );
    
    if ( htlmResponse.ok ) {
        // if HTTP-status is 200-299
        // get the response body (the method explained below)
        const textResponse = await htlmResponse.text();
        // var parser = new DomParser();
        // var dom = await parser.parseFromString(text);
        res.render('pages/index', { postResult: textResponse });
    } else {
        alert("HTTP-Error: " + htlmResponse.status);
    }
});

app.listen(PORT_NUMBER, () => console.log("Server is running on port " + PORT_NUMBER));
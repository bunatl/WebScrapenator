// express for routes
// nodemon for auto server restart
 
// Express crush course: https://www.youtube.com/watch?v=L72fhGm1tfE
// EJS and password and passport: https://www.youtube.com/watch?v=-RCnNyD0L-s
// EJS tutorial: https://scotch.io/tutorials/use-ejs-to-template-your-node-application

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
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
// override express dfault views folder path
app.set('views', path.join( __dirname, '/public/views') );
// sets route for statics pages: https://stackoverflow.com/questions/18629327/adding-css-file-to-ejs
app.use(express.static(__dirname + '/public/views'));


// index page 
// index page 
// app.get('/', function(req, res) {
//     var drinks = [
//         { name: 'Bloody Mary', drunkness: 3 },
//         { name: 'Martini', drunkness: 5 },
//         { name: 'Scotch', drunkness: 10 }
//     ];
//     var tagline = "Any code of your own that you haven't looked at for six or more months might as well have been written by someone else.";

//     res.render('pages/index', {
//         drinks: drinks,
//         tagline: tagline
//     });
// });

app.get('/', function(req, res) {
    res.render('pages/index');
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
    console.log( req.body.url );
    const htlmResponse = await fetch( req.body.url );

    const text = await htlmResponse.text();
    


    // heres the error
    // console.log( await JSON.parse( text ) );

    // if (htlmResponse.ok) { // if HTTP-status is 200-299
    //     // get the response body (the method explained below)
    //     let json = await htlmResponse.json();
    //   } else {
    //     alert("HTTP-Error: " + htlmResponse.status);
    //   }

    // const aa = await htlmResponse.json();

    // console.log( aa );
    
    // res.render('pages/index', { name: req.body.url });
});

// app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({ extended: <true|false> }))

app.listen(PORT_NUMBER, () => console.log("Server is running on port " + PORT_NUMBER));
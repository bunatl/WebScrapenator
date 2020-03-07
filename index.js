// express for routes
// nodemon for auto server restart
 
// Express crush course: https://www.youtube.com/watch?v=L72fhGm1tfE
// EJS and password and passport: https://www.youtube.com/watch?v=-RCnNyD0L-s


const express = require('express');
const app = express();
const path = require('path');
require('dotenv').config();

const Page = require('./module/page');
// import myClass from './module/myClass';

const PORT_NUMBER = process.env.SERVER_PORT || 3000;

const page = new Page("heyyyaa");
console.log(page.showData());


app.use('/', express.static('./public'))


app.listen(PORT_NUMBER, () => console.log("Server is running on port" + PORT_NUMBER));
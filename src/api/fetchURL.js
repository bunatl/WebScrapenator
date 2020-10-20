const { Router } = require("express");
const router = Router();

var rp = require('request-promise');

// user wants to fetch data
router.post('/', async (req, res, next) => {
    const urlToFetch = req.body.url;

    rp(urlToFetch)
        .then(function (htmlString) {
            // Process html...
            res.send(htmlString);
        })
        .catch(function (err) {
            // Crawling failed...
            console.log(`An error: ${ err } occurred when data from ${ urlToFetch } were being fecthed.`);
        });
});

module.exports = router;
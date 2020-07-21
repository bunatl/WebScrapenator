const { Router } = require("express");
const router = Router();

const axios = require("axios");

// user wants to fetch data
router.post('/', async (req, res, next) => {
    const urlToFetch = req.body.url;

    // fetch data from given URL
    await axios({
        method: "GET",
        url: urlToFetch,
    })
        .then((response) => {
            // console.log(response.data);
            res.send(response.data);
        })
        .catch((err) => console.error(err));
});

module.exports = router;
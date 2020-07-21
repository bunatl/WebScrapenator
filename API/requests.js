app.post('/fetchURL', async function (req, res) {
    // Fetch requested page and return its HTML
    // console.log( req.body );
    // body.req lists all element if they have theirs name (by name)
    const htlmResponse = await fetch(req.body.url);

    if (htlmResponse.ok) {
        // if HTTP-status is 200-299
        // get the response body (the method explained below)
        const textResponse = await htlmResponse.text();

        page.setData(textResponse);
        res.render('pages/index', { postResult: textResponse, inputURL: req.body.url });
    } else {
        alert("HTTP-Error: " + htlmResponse.status);
    }
});

// about page 
app.get('/about', function (req, res) {
    res.render('pages/about');
});

// my test from JS
app.get('/getFetchedPage', function (req, res) {
    res.send(page.showData());
});




const page = new Page("");

export default app;
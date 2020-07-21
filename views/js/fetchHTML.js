async function fetchHTML () {
    const urlToFetch = document.getElementById("url").value;

    // check for empty input
    if (!document.getElementById('url').validity.valid)
        alert("Please first insert URL of the website you want to scrape.");

    const dataTosend = {
        url: urlToFetch
    };

    try {
        const response = await axios({
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            url: "/giveData",
            data: JSON.stringify(dataTosend),
        });
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
}
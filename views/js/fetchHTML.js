async function fetchHTML () {
    const urlToFetch = document.getElementById("url").value;

    // check for empty input
    if (!document.getElementById('url').validity.valid || urlToFetch == "") {
        alert("Please first insert URL of the website you want to scrape.");
        return;
    }

    // clear user URL - instead place it as a placeholder
    document.getElementById('url').value = "";
    document.getElementById('url').placeholder = urlToFetch;

    const dataTosend = {
        url: urlToFetch
    };

    try {
        document.getElementById("htmlResultTextArea").innerText = "Loading HTML content...";
        const response = await axios({
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            url: "/requestData",
            data: JSON.stringify(dataTosend),
        });
        // display results on page
        document.getElementById("htmlResultTextArea").value = response.data;
    } catch (error) {
        console.error(error);
    }
}
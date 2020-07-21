var currentTab = "htmlResult";

// var fetchedPageHTMLOnly;

// function setResultTextareaHeight () {
//     const contentHeight = document.getElementById("content").clientHeight;
//     const commandFormHeight = document.getElementById("commandForm").clientHeight;
//     const footers = document.getElementsByTagName("footer");
//     const footerHeight = footers[ 0 ].clientHeight;

//     const newHeight = contentHeight - commandFormHeight - footerHeight;

//     if (newHeight >= 150)
//         document.getElementById("result").style.height = newHeight + "px";
// }

function tabsButtons (el) {
    const html = "htmlResult";
    const res = "resResult";

    if (el.id == "htmlResult") {
        // HTML tab (preview)
        document.getElementById(html).classList.add("activeTab");
        document.getElementById(res).classList.remove("activeTab");
        currentTab = html;
        // gets fetchedHTML from local storage
        document.getElementById("result").innerHTML = sessionStorage.getItem(fetchedPage);
    } else {
        // Result tab
        document.getElementById(res).classList.add("activeTab");
        document.getElementById(html).classList.remove("activeTabwwwwww");
        currentTab = res;
        document.getElementById("result").innerHTML = "";
        parseMiddleware();
    }
}

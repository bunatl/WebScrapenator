var fetchedPageHTML = "Any page hasn't been fetched yet.";
var currentTab = "htmlResult";

function setResultTextareaHeight(){
    const contentHeight = document.getElementById("content").clientHeight;
    const commandFormHeight = document.getElementById("commandForm").clientHeight;
    const footers = document.getElementsByTagName("footer");
    const footerHeight = footers[0].clientHeight;

    const newHeight = contentHeight - commandFormHeight - footerHeight;

    if ( newHeight >= 150 )
        document.getElementById("result").style.height = newHeight + "px";
}

// Add (copy in) new line (li element) as second last li element in ul
function addParameter(){
    // Clone API: https://api.jquery.com/clone
    $( "#parametersInput li:first" ).clone().insertBefore('#addNewParameterButton');
    setResultTextareaHeight();
}

function delParameter( e ){
    // Number of elements: https://stackoverflow.com/questions/20040825/check-how-many-li-there-are-in-a-ul-with-javascript/20040849
    const noLi = document.getElementById("parametersInput").getElementsByTagName("li").length;
    // 1 has to be substructed because add button is also li element
    if ( ( noLi - 1 ) > 1 )
        // remove current node: https://stackoverflow.com/questions/2727717/how-to-remove-the-parent-element-using-plain-javascript
        e.parentElement.remove();
    setResultTextareaHeight();
}

function tabsButtons( el ){
    const html = "htmlResult";
    const res = "resResult";

    if ( el.id == "htmlResult" ){
        // HTML tab (preview)
        document.getElementById( html ).classList.add("activeTab")
        document.getElementById( res ).classList.remove("activeTab");
        currentTab = html;
        document.getElementById( "result" ).innerHTML = fetchedPageHTML;
    } else {
        // Result tab
        document.getElementById( res ).classList.add("activeTab")
        document.getElementById( html ).classList.remove("activeTab");
        currentTab = res;
        parse();
    }
}

// https://stackoverflow.com/questions/247483/http-get-request-in-javascript
function httpGet( url ){
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", url, false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
}

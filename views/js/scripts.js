var fetchedPageHTML;

function foo(){
    console.log( document.getElementById("url").value );
    document.getElementById("result").value = document.getElementById("url").value;
    // document.getElementById("result").value = "hello text";
    document.getElementById("modalBody").innerText = document.getElementById("url").value;
}

// Always set aside height equals to content height
window.addEventListener('click', function(){
    const contentHeight = document.getElementById("content").clientHeight;
    document.getElementsByTagName("aside")[0].style.height = contentHeight + "px";
})

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

window.addEventListener('DOMContentLoaded', (event) => {
    setResultTextareaHeight( 0 );
    // Incialize (styles) tabs
    tabsButtons( document.getElementById( 'htmlResult' ) );
    // Initialize fetchedPageHTML
    fetchedPageHTML = httpGet( '/getFetchedPage' );



    document.getElementById("parametersInput").onkeyup = async function(){
        // Inputs name: element, id, classes, innerText
        const inputs = document.getElementById('parametersInput').getElementsByTagName('input');

        let map = new Map();
        var numberOfFilledInputs = 0;
        for (let item of inputs) {
            map.set( item.name, item.value );
            // Count number of input with non-empty input
            if ( item.value != "")
                numberOfFilledInputs++;
        }

        fetchedPageHTML = httpGet("/text"); 

        // Convert plain fetched text into html object
        var htmlObj = $( fetchedPageHTML );
        console.log( htmlObj );
        // console.log( htmlObj[81].tagName);

        // iterates through array of html object and selects desired element
        for ( let attribute of htmlObj ) {     
            // console.log( attribute.tagName + " - " + attribute.id );
        
            // Includes: https://www.w3schools.com/jsref/jsref_includes.asp
            const elementBoolean = ( attribute.tagName == inputs["element"].value.toUpperCase() && ( inputs["element"].value != "" ) );
            const idBoolean = ( ( attribute.id == inputs["id"].value ) && ( inputs["id"].value != "" ) );

            var classesBoolean = false;
            if ( attribute.className != undefined && ( inputs["classes"].value != "" ) )
                classesBoolean = attribute.className.includes( inputs["classes"].value.toLowerCase() );

            var innerTextBoolean = false;
            if ( attribute.innerHTML != undefined && ( inputs["innerText"].value != "" ) )
                innerTextBoolean = ( attribute.innerHTML.toLowerCase().includes( inputs["innerText"].value.toLowerCase() ) );

            console.log( "el: " + elementBoolean + "   id: " + idBoolean + "   clas: " + classesBoolean + "   iner:" + innerTextBoolean )

            const booleanArray = [elementBoolean, idBoolean, classesBoolean, innerTextBoolean];

            var numberOfTrueBooleans = 0;
            for ( let bool of [elementBoolean, idBoolean, classesBoolean, innerTextBoolean] )
                if ( bool )
                    numberOfTrueBooleans++;

            console.log( "filedInputs:" + numberOfFilledInputs + " trueBools: " + booleanArray );

            if ( numberOfTrueBooleans == numberOfFilledInputs ){
                document.getElementById( "result" ).innerHTML = attribute.innerHTML;
                console.log( attribute.innerHTML );
                return;
            }
        }
    }       
});


function parseHTMLbyParameters( html ){
    console.log( html );

    return "parsedHTML";
}

function tabsButtons( el ){
    const html = "htmlResult";
    const res = "resResult";

    // Tabs colors are set here
    const activeColor = "grey";
    const deafultBackround = "#ddd";

    if ( el.id == "htmlResult" ){
        document.getElementById( html ).style.background = activeColor;
        document.getElementById( res ).style.background = deafultBackround;
    } else {
        document.getElementById( res ).style.background = activeColor;
        document.getElementById( html ).style.background = deafultBackround;
        const parsedHTML = parseHTMLbyParameters( document.getElementById( "result" ).innerHTML );
        document.getElementById( "result" ).innerHTML = parsedHTML;
    }
}

// https://stackoverflow.com/questions/247483/http-get-request-in-javascript
function httpGet( url ){
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", url, false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
}

function aa(){
    
    console.log( fetchedPageHTML );
}


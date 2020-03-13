var parsedResultArray = [];

var fetchedPageHTML = "Any page hasn't been fetched yet.";

const fetchedPage = "fetchedPage";
const parsedResult = "parsedResult";

// Always set aside height equals to content height
window.addEventListener('click', function(){
    const contentHeight = document.getElementById("content").clientHeight;
    document.getElementsByTagName("aside")[0].style.height = contentHeight + "px";
})

function resultArrayInnerJoin( arr, arr2 ){
    if ( arr.length == 0 )
        return arr2;
    else if ( arr2.length == 0 )
        return arr;

    var innerJoin = [];

    for( item of arr ){
        for( innerItem of arr2 ){
            // console.log( item + " - " + innerItem )
            if( item == innerItem )
                innerJoin.push( item );//console.log( item )
        }
    }
    return innerJoin;
}

window.addEventListener('DOMContentLoaded', (event) => {
    setResultTextareaHeight( 0 );

    // fetched data are stored locally
    sessionStorage.setItem( fetchedPage, httpGet( '/getFetchedPage' ) );

    // https://stackoverflow.com/questions/25028853/addeventlistener-two-functions
    document.getElementById("parametersInput").onkeyup = parseMiddleware;
});

function parseMiddleware(){
    const iterations = document.getElementById('parametersInput').getElementsByTagName('input').length / 4;
    // sessionStorage: https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage
    const htmlToParse = sessionStorage.getItem( fetchedPage );
    
    // if HTML tab is selected no parsing will be done
    if( currentTab != "htmlResult" )
        // textToParse, number of total iterations (rows with input), current iteration
        parse( htmlToParse, iterations, 0 );
}

function parse( htmlToParse, totalIterations, currentIteration ){
    // No iterations left -> return
    if ( totalIterations == 0 ) return;

    // Inputs name: element, id, classes, text
    const inputs = document.getElementById('parametersInput').getElementsByTagName('input');

    // if a new row with parametrs (except first one) is empty don't apply empty string on the result parse
    if ( inputs[ 0 + ( currentIteration * 4 ) ].value == "" &&
         inputs[ 1 + ( currentIteration * 4 ) ].value == "" &&
         inputs[ 2 + ( currentIteration * 4 ) ].value == "" &&
         inputs[ 3 + ( currentIteration * 4 ) ].value == "" )
        parse( htmlToParse, --totalIterations, ++currentIteration ); 
        
    // Convert plain fetched text into html object
    // https://tomassetti.me/parsing-html/#browser
    parser = new DOMParser();
    fetchDoc = parser.parseFromString( htmlToParse, "text/html" );

    // if input field with ID is filled no other inputs are checked
    // input with name ID (input array 1 + k* iteration)
    if ( inputs[ 1 + ( currentIteration * 4 ) ].value != "" ){
        const resultID = fetchDoc.getElementById( inputs[ 1 + ( currentIteration * 4 ) ].value );
        if( resultID != "" && resultID != null ){
            document.getElementById( "result" ).innerHTML = resultID.outerHTML;
            return;
        }
    }

    let resultTag = [];
    // input with name tag (input array 0 + k* iteration)
    if ( inputs[ 0 + ( currentIteration * 4 ) ].value != "" )
        resultTag = fetchDoc.getElementsByTagName( inputs[ 0 + ( currentIteration * 4 ) ].value );

    let resultClasses = [];
    // input with name classes (input array 2 + k* iteration)
    if ( inputs[ 2 + ( currentIteration * 4 ) ].value != "" )
        resultClasses = fetchDoc.getElementsByClassName( inputs[ 2 + ( currentIteration * 4 )  ].value );

    let elementAndClasses = resultArrayInnerJoin( resultTag, resultClasses );
    
    // input with name text (input array 3 + k* iteration)
    if ( inputs[ 3 + ( currentIteration * 4 ) ].value != "" ){
        // by default matching text will be searched in array created from class/element input
        let resultText = [];
        let arrayForSearch = elementAndClasses;
        
        //if both previous arrays are empty takes from whole fetched page for search
        if ( elementAndClasses.length == 0 )
            // select all tag elements from given URL to search in
            arrayForSearch = fetchDoc.getElementsByTagName("*");
            console.log( arrayForSearch );

        // check if any el contains given text
        for( item of arrayForSearch ){
            if ( item.outerHTML.includes( inputs[ 3 + ( currentIteration * 4 ) ].value ) &&
                item.tagName != "HTML" &&
                item.tagName != "HEAD" && 
                item.tagName != "BODY" )
                resultText.push( item );
        }
        elementAndClasses = resultText;
    }

    // print result into result textbox
    const elResult = document.getElementById( "result" );
    // in order to print into the textarea, it's innerHTML has to be set to ""
    elResult.innerHTML = "";
    var stringForAnotherIterations = "";
    let i = 0;
    for( item of elementAndClasses ){
        const delim = "\n\n\n===================================================================\n\n\n";

        if( i++ > 0 )
            elResult.innerHTML += delim;

        elResult.innerHTML += item.outerHTML;
        stringForAnotherIterations += item.outerHTML;
    }
    // each iterations if every line of input fields
    parse( stringForAnotherIterations, --totalIterations, ++currentIteration );
} 

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
    // Initialize fetchedPageHTML
    fetchedPageHTML = httpGet( '/getFetchedPage' );

    console.log( fetchedPageHTML );

    // https://stackoverflow.com/questions/25028853/addeventlistener-two-functions
    document.getElementById("parametersInput").onkeyup = parse;
});

function parse(){
    // if HTML tab is selected no parsing will be done
    if( currentTab == "htmlResult" )
        return;
    // Inputs name: element, id, classes, text
    const inputs = document.getElementById('parametersInput').getElementsByTagName('input');

    // fetchedPageHTML = httpGet( '/getFetchedPage' ) 

    // Convert plain fetched text into html object
    // https://tomassetti.me/parsing-html/#browser
    parser = new DOMParser();
    fetchDoc = parser.parseFromString(fetchedPageHTML, "text/html");
    console.log( fetchDoc );

    if ( inputs["id"].value != "" ){
        const resultID = fetchDoc.getElementById( inputs["id"].value );
        if( resultID != "" && resultID != null ){
            document.getElementById( "result" ).innerHTML = resultID.outerHTML;
            return;
        }
    }

    let resultTag = [];
    if ( inputs["tag"].value != "" )
        resultTag = fetchDoc.getElementsByTagName( inputs["tag"].value );

    let resultClasses = [];
    if ( inputs["classes"].value != "" )
        resultClasses = fetchDoc.getElementsByClassName( inputs["classes"].value );

    let elementAndClasses = resultArrayInnerJoin( resultTag, resultClasses );
    
    if ( inputs["text"].value != "" ){
        // by default matching text will be searched in array created from class/element input
        let resultText = [];
        let arrayForSearch = elementAndClasses;
        
        //if both previous arrays are empty takes from whole fetched page for search
        if ( elementAndClasses.length == 0 ){
            // select all tag elements from given URL to search in
            arrayForSearch = fetchDoc.getElementsByTagName("*");
        }
        console.log( arrayForSearch );
        // check if any el contains given text
        for( item of arrayForSearch ){
            if ( item.outerHTML.includes( inputs["text"].value ) )
                resultText.push( item );
        }
        elementAndClasses = resultText;
        console.log( elementAndClasses );
    }

    // print result into result textbox
    const elResult = document.getElementById( "result" );
    elResult.innerHTML = "";
    let i = 0;
    for( item of elementAndClasses ){
        const delim = "\n\n\n===================================================================\n\n\n";

        if( i++ > 0 )
            elResult.innerHTML += delim;

        elResult.innerHTML += item.outerHTML;
    }
} 
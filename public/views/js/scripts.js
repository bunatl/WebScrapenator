function foo(){
    console.log( document.getElementById("url").value );
    document.getElementById("result").value = document.getElementById("url").value;
    // document.getElementById("result").value = "hello text";
    document.getElementById("modalBody").innerText = document.getElementById("url").value;
}

function add(){
    // Clone API: https://api.jquery.com/clone/
    $( "#parametersInput li:first" ).clone().appendTo( "#parametersInput" );
}

function del( e ){
    // Number of elements: https://stackoverflow.com/questions/20040825/check-how-many-li-there-are-in-a-ul-with-javascript/20040849
    const noLi = document.getElementById("parametersInput").getElementsByTagName("li").length;
    if ( noLi > 1 )
        // remove current node: https://stackoverflow.com/questions/2727717/how-to-remove-the-parent-element-using-plain-javascript
        e.parentElement.remove();
}
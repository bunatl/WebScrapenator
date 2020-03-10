function foo(){
    console.log( document.getElementById("url").value );
    document.getElementById("result").value = document.getElementById("url").value;
    // document.getElementById("result").value = "hello text";
    document.getElementById("modalBody").innerText = document.getElementById("url").value;
}

// Always set aside height equals to content height
window.addEventListener('click', function(){
    const contentHeight = document.getElementById("content").clientHeight;
    document.getElementsByTagName("aside")[0].style.height = ( contentHeight + 4 ) + "px";
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
    if ( noLi > 1 )
        // remove current node: https://stackoverflow.com/questions/2727717/how-to-remove-the-parent-element-using-plain-javascript
        e.parentElement.remove();
    setResultTextareaHeight();
}

window.addEventListener('DOMContentLoaded', (event) => {
    setResultTextareaHeight();
});
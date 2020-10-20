// Add (copy in) new line (li element) as second last li element in ul
function addParameter () {
    // Clone API: https://api.jquery.com/clone
    let liEl = $("#parametersInput li:first-child").clone();
    // remove any value from all inputs
    for (child of liEl.children())
        child.value = "";

    // insert new parameter row before add button - second last li
    liEl.insertAfter("#parametersInput li:nth-last-child(2)");

    setResultTextareaHeight();
    // only newly create input, new listners have to be added
    addEventListenerOnInputFields();
}

function delParameter (e) {
    // Number of elements: https://stackoverflow.com/questions/20040825/check-how-many-li-there-are-in-a-ul-with-javascript/20040849
    const noLi = document.getElementById("parametersInput").getElementsByTagName("li").length;
    // 1 has to be substructed because add button is also li element
    if ((noLi - 1) > 1)
        // remove current node: https://stackoverflow.com/questions/2727717/how-to-remove-the-parent-element-using-plain-javascript
        e.parentElement.remove();

    setResultTextareaHeight();
    // result can change
    callParse();
}

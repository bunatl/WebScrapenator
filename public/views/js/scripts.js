function foo(){
    console.log( document.getElementById("url").value );
    document.getElementById("result").value = document.getElementById("url").value;
    // document.getElementById("result").value = "hello text";
    document.getElementById("modalBody").innerText = document.getElementById("url").value;
}

function showPreview() {
    foo();
    //alert ( document.getElementById("url").value );
}

function bar() {
    //https://www.w3schools.com/jsref/met_node_appendchild.asp
    var node = document.createElement("LI"); 
    var textnode = document.createTextNode("Water"); 
    node.appendChild(textnode); 
    document.getElementById("results").appendChild(node); 
}
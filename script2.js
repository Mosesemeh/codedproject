 var botton = document.getElementById("enter");
 var input = document.getElementById("userinput");
 var ul = document.querySelector("ul");

function inputLength() {
    return input.value.length;
}

function creatListElement() {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";
}


function addListAfterClick() {
    if (inputLength() > 0) {
        creatListElement();
     }    
}
function eventWhich() {
    return event.which;
}

function addListAfterKeypress() {
    if (inputLength() > 0 && eventWhich() === 13) {
        creatListElement();
    }
}

 botton.addEventListener("click", addListAfterClick);

 input.addEventListener("keypress", addListAfterKeypress);

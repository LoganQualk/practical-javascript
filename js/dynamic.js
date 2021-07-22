var ul = document.querySelector("ul");
var names = ["Andrew", "Logan", "Samantha", "Spencer"];

function makeListItems() {
    names.forEach((name) => {
        var li = document.createElement("li");
        li.innerText = name;
        ul.appendChild(li);
    });
}

makeListItems();
var range = document.querySelector("#range");
var overlay = document.querySelector(".before");

function updateOverlayWidth() {
    var width = `${range.value}%`;
    overlay.style.width = width;
}

range.addEventListener("input", updateOverlayWidth);

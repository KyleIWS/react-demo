"use strict";

// Remove the right-click menu as default behavior for the window.
// We do this because we don't want that menu to pop while playing.
window.oncontextmenu = function() {
    return false;
}

// Helpful DOM element getter.
function $(id) {
    return document.getElementById(id);
}

// The board we are playing on
var board = $("board");

// Attach on the tiles.
for(var col = 0; col < 3; col++) {
    for(var row = 0; row < 3; row++) {
        var tile = document.createElement("div");
        tile.classList.add("tile");
        tile.left = (col * 100) + "px";
        tile.top = (row * 100) + "px";

        tile.onmousedown = choose;      
        
        board.appendChild(tile);

    }
}

// Event handle function that changes tiles
// to the correct shape.
function choose(event) {
    if(event.button == 0) {
        event.target.classList.add("husky");
        event.target.classList.remove("coug");
    } else  if(event.button == 2) {
        event.target.classList.add("coug");
        event.target.classList.remove("husky");
    } else if(event.button == 1) {
        event.target.classList.remove("husky");
        event.target.classList.remove("coug");
    }
}
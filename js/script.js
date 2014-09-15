var toggled = true;

window.onresize = function () {
    if (window.innerWidth > 768) {
        document.getElementById("side").style.left = null;
        document.getElementById("bar").style.background = null;
        toggled = true;
    }
}

/** Toggle the sidebar */
document.getElementById("bar").onclick = function () {
    document.getElementById("bar").style.background = toggled ? "#999" : "#666";
    document.getElementById("side").style.left = toggled ? "0px" : "-500px";
    toggled = !toggled;
}
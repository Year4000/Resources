var toggled = true;

/** Toggle the sidebar */
function toggle_sidebar() {
    document.getElementById("bar").style.background = toggled ? "#999" : "#666";
    document.getElementById("side").style.display = toggled ? "block" : "none";
    toggled = !toggled;
}
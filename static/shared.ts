declare const $;
window.addEventListener("load", () => {
    if (window.innerWidth > 420) {
        $("#expand-button").classList.add("expanded");
    } else {
        $("#expand-button").classList.add("collapsed");
    }
    $("#expand-button").onclick = () => {
        if ($("#expand-button").classList.contains("expanded")) {
            $("#expand-button").classList.remove("expanded");
            $("#expand-button").classList.add("collapsed");

            $(".side-bar").classList.remove("expanded");
            $(".side-bar").classList.add("collapsed");

            $(".header-bar").classList.remove("collapsed");
            $(".header-bar").classList.add("expanded");
        } else {
            $("#expand-button").classList.remove("collapsed");
            $("#expand-button").classList.add("expanded");

            $(".side-bar").classList.remove("collapsed");
            $(".side-bar").classList.add("expanded");

            $(".header-bar").classList.remove("expanded");
            $(".header-bar").classList.add("collapsed");
        }
    };
});
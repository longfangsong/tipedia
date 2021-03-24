declare const $;
window.addEventListener("load", () => {
    console.log(window.innerWidth);
    if (window.innerWidth > 420) {
        $("#expand-button").classList.add("expanded");
        $(".side-bar").classList.add("expanded");
        $(".search-container").classList.add("expanded");
    } else {
        $("#expand-button").classList.add("collapsed");
        $(".side-bar").classList.add("collapsed");
        $(".search-container").classList.add("collapsed");
    }
    $("#expand-button").onclick = () => {
        if ($("#expand-button").classList.contains("expanded")) {
            $("#expand-button").classList.remove("expanded");
            $("#expand-button").classList.add("collapsed");

            $(".side-bar").classList.remove("expanded");
            $(".side-bar").classList.add("collapsed");

            $(".header-bar").classList.remove("collapsed");
            $(".header-bar").classList.add("expanded");


            $(".search-container").classList.remove("collapsed");
            $(".search-container").classList.add("expanded");
        } else {
            $("#expand-button").classList.remove("collapsed");
            $("#expand-button").classList.add("expanded");

            $(".side-bar").classList.remove("collapsed");
            $(".side-bar").classList.add("expanded");

            $(".header-bar").classList.remove("expanded");
            $(".header-bar").classList.add("collapsed");

            $(".search-container").classList.remove("expanded");
            $(".search-container").classList.add("collapsed");
        }
    };
    $("#language-menu-button").onclick = () => {
        const br: DOMRect = $("#language-menu-button").getBoundingClientRect();
        $("#language-menu > .MuiPopover-paper").style.left = br.left;
        $("#language-menu > .MuiPopover-paper").style.top = br.top + br.height;
        $("#language-menu").classList.remove("hidden");
    };
    $("#language-menu").onclick = () => {
        $("#language-menu").classList.add("hidden");
    }
});
function isSingle(index) {
    return index.hasOwnProperty("section") !== undefined;
}
var searchOptions = {
    keys: [{
            name: 'name',
            weight: 0.45
        }, {
            name: 'aliases',
            weight: 0.4
        }, {
            name: 'summary',
            weight: 0.1
        }, {
            name: 'tags',
            weight: 0.05
        }]
};
var fuse = new Fuse(site_index, searchOptions);
window.addEventListener("load", function () {
    var public_url = $("meta[name='public-url']").getAttribute("content");
    var language = navigator.language.split("-")[0];
    $(".search-input").onkeyup = function () {
        var to_search = $(".search-input").value;
        $("#search-result").innerHTML = "";
        if (to_search !== "") {
            var result = fuse.search(to_search);
            if (result.length === 0) {
                $(".search-container").style.opacity = 0;
                $(".search-container").style.visibility = "hidden";
                $("#search-result").innerHTML = "<li class=\"MuiListItem-root jss27 MuiListItem-gutters\">\u65E0\u7ED3\u679C</li>";
            }
            else {
                var html_str = "";
                for (var _i = 0; _i < result.length; _i++) {
                    var item = result[_i];
                    if (isSingle(item.item)) {
                        html_str += "\n                <a class=\"MuiButtonBase-root MuiListItem-root MuiListItem-gutters MuiListItem-button\"\n                    tabindex=\"0\" role=\"button\" aria-disabled=\"false\" href=\"/" + public_url + "/" + language + "/" + item.item.section + "/" + item.item.filename + ".html\">\n                    <div class=\"MuiListItemText-root\">\n                        <span class=\"MuiTypography-root MuiListItemText-primary MuiTypography-body1 MuiTypography-displayBlock\">\n                            " + item.item.name + "\n                        </span>\n                    </div>\n                    <span class=\"MuiTouchRipple-root\"></span>\n                </a>\n                ";
                    }
                }
                $(".search-container").style.opacity = 1;
                $(".search-container").style.visibility = "visible";
                $("#search-result").innerHTML = html_str;
            }
        }
    };
    $(".jss1").onclick = function () {
        $(".search-container").style.opacity = 0;
        $(".search-container").style.visibility = "hidden";
        $(".search-input").value = "";
    };
});

function isSingle(index) {
    return index.hasOwnProperty("section");
}
window.addEventListener("load", function () {
    $("#random-page").onclick = function () {
        var public_url = $("meta[name='public-url']").getAttribute("content");
        var language = navigator.language.split("-")[0];
        var to_visit = site_index[Math.floor(Math.random() * site_index.length)];
        while (!isSingle(to_visit)) {
            to_visit = site_index[Math.floor(Math.random() * site_index.length)];
        }
        window.location.href = public_url + "/" + language + "/" + to_visit.section + "/" + to_visit.filename + ".html";
    };
});

function isSingle(index) {
    return index.hasOwnProperty("section");
}
window.addEventListener("load", function () {
    var language = document.documentElement.lang.split("-")[0];
    var what = site_index.filter(isSingle).filter(function (it) { return it.section == "what"; });
    var how = site_index.filter(isSingle).filter(function (it) { return it.section == "how"; });
    var why = site_index.filter(isSingle).filter(function (it) { return it.section == "why"; });
    var selected_what = what[Math.floor(Math.random() * what.length)];
    var selected_how = how[Math.floor(Math.random() * how.length)];
    var selected_why = why[Math.floor(Math.random() * why.length)];
    $("#do-you-know-what").innerHTML = selected_what.name;
    var public_url = $("meta[name='public-url']").getAttribute("content");
    $("#do-you-know-what-button").onclick = function () { return window.location.href = public_url + "/" + language + "/" + selected_what.section + "/" + selected_what.filename + ".html"; };
    $("#do-you-know-how").innerHTML = selected_how.name;
    $("#do-you-know-how-button").onclick = function () { return window.location.href = public_url + "/" + language + "/" + selected_how.section + "/" + selected_how.filename + ".html"; };
    $("#do-you-know-why").innerHTML = selected_why.name;
    $("#do-you-know-why-button").onclick = function () { return window.location.href = public_url + "/" + language + "/" + selected_why.section + "/" + selected_why.filename + ".html"; };
});

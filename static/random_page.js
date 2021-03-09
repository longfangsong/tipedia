window.addEventListener("load", function () {
    $("#random-page").onclick = function () {
        var language = navigator.language.split("-")[0];
        var to_visit = site_index[Math.floor(Math.random() * site_index.length)];
        window.location.href = "/" + language + "/" + to_visit.section + "/" + to_visit.filename + ".html";
    };
});

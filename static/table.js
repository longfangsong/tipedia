window.addEventListener("load", function () {
    for (var _i = 0, _a = $$(".table-row"); _i < _a.length; _i++) {
        var tr = _a[_i];
        var tableRow = tr;
        var aElement = tableRow.getElementsByTagName("a")[0];
        var href = aElement.getAttribute("href");
        tableRow.onclick = function () {
            window.location.href = href;
        };
    }
});

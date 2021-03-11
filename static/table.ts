declare const $;
declare const $$;

window.addEventListener("load", () => {
    for (const tr of $$(".table-row")) {
        let tableRow: HTMLTableRowElement = tr;
        let aElement: HTMLAnchorElement = tableRow.getElementsByTagName("a")[0];
        let href = aElement.getAttribute("href");
        tableRow.onclick = () => {
            window.location.href = href;
        };
    }
});
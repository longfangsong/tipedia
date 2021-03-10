declare const $;
declare const $$;

window.addEventListener("load", () => {
    for (const tr of $$(".table-row")) {
        const tableRow: HTMLTableRowElement = tr;
        const aElement: HTMLAnchorElement = tableRow.getElementsByTagName("a")[0];
        const href = aElement.getAttribute("href");
        tableRow.onclick = () => {
            window.location.href = href;
        };
    }
});
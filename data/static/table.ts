declare const $;
declare const $$;

interface SearchIndex {
    section: string,
    category: string,
    filename: String,
    name: String,
    aliases: Array<string>,
    summary: String,
    tags: Array<string>,
}

declare const site_index: Array<SearchIndex>;
window.addEventListener("load", () => {
    for (const tr of $$(".table-row")) {
        const tableRow: HTMLTableRowElement = tr;
        tableRow.onclick = () => {
            const aElement: HTMLAnchorElement = tableRow.getElementsByTagName("a")[0];
            window.location.href = aElement.getAttribute("href");
        };
    }
});
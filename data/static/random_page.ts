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
    $("#random-page").onclick = () => {
        const language = navigator.language.split("-")[0];
        const to_visit = site_index[Math.floor(Math.random() * site_index.length)];
        window.location.href = `/${language}/${to_visit.section}/${to_visit.filename}.html`;
    }
});
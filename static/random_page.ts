declare const $;
declare const $$;

interface SearchIndex {
    section: string,
    category: string,
    filename: string,
    name: string,
    aliases: Array<string>,
    summary: string,
    tags: Array<string>,
}

declare const site_index: Array<SearchIndex>;

window.addEventListener("load", () => {
    $("#random-page").onclick = () => {
        let public_url = $("meta[name='public-url']").getAttribute("content");
        const language = navigator.language.split("-")[0];
        const to_visit = site_index[Math.floor(Math.random() * site_index.length)];
        window.location.href = `${public_url}/${language}/${to_visit.section}/${to_visit.filename}.html`;
    }
});
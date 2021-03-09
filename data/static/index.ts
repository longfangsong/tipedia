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
    const language = navigator.language.split("-")[0];
    const what = site_index.filter(it => it.section == "what");
    const how = site_index.filter(it => it.section == "how");
    const why = site_index.filter(it => it.section == "why");
    const selected_what = what[Math.floor(Math.random() * what.length)];
    const selected_how = how[Math.floor(Math.random() * how.length)];
    const selected_why = why[Math.floor(Math.random() * why.length)];
    $("#do-you-know-what").innerHTML = selected_what.name;
    $("#do-you-know-what-button").onclick = () => window.location.href = `/${language}/${selected_what.section}/${selected_what.filename}.html`;
    $("#do-you-know-how").innerHTML = selected_how.name;
    $("#do-you-know-how-button").onclick = () => window.location.href = `/${language}/${selected_how.section}/${selected_how.filename}.html`;
    $("#do-you-know-why").innerHTML = selected_why.name;
    $("#do-you-know-why-button").onclick = () => window.location.href = `/${language}/${selected_why.section}/${selected_how.filename}.html`;
});
declare const $;
declare const $$;

interface SingleArticleSearchIndex {
    section: string,
    category: string,
    filename: string,
    name: string,
    aliases: Array<string>,
    summary: string,
    tags: Array<string>,
}

interface ArticleArraySearchIndex {
    name: string,
    articles: Array<SingleArticleSearchIndex>
}

type SearchIndex = SingleArticleSearchIndex | ArticleArraySearchIndex;

declare const site_index: Array<SearchIndex>;

function isSingle(index: SearchIndex): index is SingleArticleSearchIndex {
    return index.hasOwnProperty("section") !== undefined
}

window.addEventListener("load", () => {
    const language = navigator.language.split("-")[0];
    const what = site_index.filter(isSingle).filter(it => it.section == "what");
    const how = site_index.filter(isSingle).filter(it => it.section == "how");
    const why = site_index.filter(isSingle).filter(it => it.section == "why");
    const selected_what = what[Math.floor(Math.random() * what.length)];
    const selected_how = how[Math.floor(Math.random() * how.length)];
    const selected_why = why[Math.floor(Math.random() * why.length)];
    $("#do-you-know-what").innerHTML = selected_what.name;
    let public_url = $("meta[name='public-url']").getAttribute("content");
    $("#do-you-know-what-button").onclick = () => window.location.href = `${public_url}/${language}/${selected_what.section}/${selected_what.filename}.html`;
    $("#do-you-know-how").innerHTML = selected_how.name;
    $("#do-you-know-how-button").onclick = () => window.location.href = `${public_url}/${language}/${selected_how.section}/${selected_how.filename}.html`;
    $("#do-you-know-why").innerHTML = selected_why.name;
    $("#do-you-know-why-button").onclick = () => window.location.href = `${public_url}/${language}/${selected_why.section}/${selected_how.filename}.html`;
});
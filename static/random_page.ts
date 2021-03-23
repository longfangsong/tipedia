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

function isSingle(index: SearchIndex): index is SingleArticleSearchIndex {
    return index.hasOwnProperty("section")
}

declare const site_index: Array<SearchIndex>;

window.addEventListener("load", () => {
    $("#random-page").onclick = () => {
        let public_url = $("meta[name='public-url']").getAttribute("content");
        let language = document.documentElement.lang.split("-")[0];
        let to_visit = site_index[Math.floor(Math.random() * site_index.length)];
        while (!isSingle(to_visit)) {
            to_visit = site_index[Math.floor(Math.random() * site_index.length)];
        }
        window.location.href = `${public_url}/${language}/${to_visit.section}/${to_visit.filename}.html`;
    }
});
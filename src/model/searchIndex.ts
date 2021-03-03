import Fuse from "fuse.js";

export interface SearchIndex {
    name: string,
    aliases: Array<string>,
    tags: Array<string>,
    category: string,
    content_for_search: string,
    path: string
}

const searchOptions = {
    keys: [{
        name: 'name',
        weight: 0.45
    }, {
        name: 'aliases',
        weight: 0.4
    }, {
        name: 'content_for_search',
        weight: 0.15
    }],
}

export class Store {
    public readonly fuse: Fuse<SearchIndex>;

    constructor(public readonly items: Array<SearchIndex>) {
        this.fuse = new Fuse(items, searchOptions);
    }
}

export let whatStore: Map<string, Store> = new Map();

export async function fetchSearchIndex(language: string) {
    if (!whatStore.has(language)) {
        const response = await fetch(process.env.PUBLIC_URL + `/data/${language}/index.json`);
        const store = new Store(await response.json());
        whatStore.set(language, store);
    }
    return whatStore.get(language);
}


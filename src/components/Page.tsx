import React, {useState} from "react";
import {useTranslation} from "react-i18next";

export function Page(prop: { path: string }) {
    const [html, setHtml] = useState("");
    const {i18n} = useTranslation();
    const path = decodeURIComponent(prop.path);
    (async () => {
        let page = await fetch(process.env.PUBLIC_URL + `/data/${i18n.language}/${path}`);
        let newHtml = await page.text();
        setHtml(newHtml);
    })();
    return (
        <div className="page" dangerouslySetInnerHTML={{__html: html}}/>
    );
}

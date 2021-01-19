import React, {useState} from "react";
import {Typography} from "@material-ui/core";
import {fetchSearchIndex, SearchIndex} from "../model/searchIndex";
import {useTranslation} from "react-i18next";
import {useEffectOnce} from "react-use";

export function Description() {
    const {t, i18n} = useTranslation();
    let [languageItems, setLanguageItems] = useState<Array<SearchIndex>>([]);
    useEffectOnce(() => {
        fetchSearchIndex(i18n.language).then(it => setLanguageItems(it!.items));
    });
    return (
        <div>
            <Typography variant="h3" component="h4" gutterBottom>
                Welcome to Tipedia
            </Typography>
            <Typography variant="h6" gutterBottom>
                the free encyclopedia for TiDB and related works
            </Typography>
            <Typography gutterBottom>
                {t("All")} {languageItems.length} {t("items")}
            </Typography>
        </div>
    );
}
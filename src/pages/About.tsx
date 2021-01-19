import {Page} from "../components/Page";
import React, {Suspense} from "react";

export function About() {
    return (
        <Suspense fallback="loading">
            <Page path={"about/index.htmlpart"}/>
        </Suspense>
    )
}
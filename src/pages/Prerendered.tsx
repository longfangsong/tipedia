import {useParams} from "react-router";
import {Page} from "../components/Page";
import React, {Suspense} from "react";

export function Prerendered() {
    let {path} = useParams<{ path: string }>();
    return (
        <Suspense fallback="loading">
            <Page path={path}/>
        </Suspense>
    )
}
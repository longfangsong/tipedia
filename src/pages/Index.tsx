import React, {Suspense} from "react";
import {Description} from "../components/Description";
import DoYouKnow from "../components/DoYouKnow";

export function Index() {
    return (
        <Suspense fallback="loading">
            <Description/>
            <DoYouKnow/>
        </Suspense>
    )
}
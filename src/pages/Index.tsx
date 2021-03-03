import React, {Suspense} from "react";
import {Description} from "../components/Description";
import DoYouKnow from "../components/DoYouKnow";
import AllDataTable from "../components/AllDataTable";

export function Index() {
    return (
        <Suspense fallback="loading">
            <Description/>
            <DoYouKnow variant={"what"} promote={"DoYouKnowWhatIs"}/>
            <DoYouKnow variant={"how"} promote={"DoYouKnowHowTo"}/>
            <AllDataTable variant={"what"}/>
        </Suspense>
    )
}
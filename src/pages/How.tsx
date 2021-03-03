import AllDataTable from "../components/AllDataTable";
import React, {Suspense} from "react";

export function How() {
    return (
        <Suspense fallback={"loading"}>
            <AllDataTable variant={"how"}/>
        </Suspense>
    );
}
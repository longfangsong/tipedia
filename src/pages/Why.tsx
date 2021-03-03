import AllDataTable from "../components/AllDataTable";
import React, {Suspense} from "react";

export function Why() {
    return (
        <Suspense fallback={"loading"}>
            <AllDataTable variant={"why"}/>
        </Suspense>
    );
}
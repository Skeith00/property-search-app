import React from "react"
import PropertyView from "../component/view/PropertyView"
import PageWithAppBar from "../component/PageWithAppBar";

export default function ViewPage() {

    return (
        <PageWithAppBar>
            <PropertyView />
        </PageWithAppBar>
    )
}
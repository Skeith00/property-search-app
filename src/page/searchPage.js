import { SearchProvider } from "../context/search.context"
import PropertySearch from "../component/search/PropertySearch"
import React from "react"
import PageWithAppBar from "../component/PageWithAppBar";

export default function SearchPage() {
    return (
        <PageWithAppBar>
            <SearchProvider>
                <PropertySearch />
            </SearchProvider>
        </PageWithAppBar>
    )
}
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom"
import SearchPage from '../page/searchPage';
import ViewPage from '../page/viewPage';
import {Paths} from "./paths";
import React from "react";

const routes = [
    { path: "/", element: <SearchPage /> },
    { path: Paths.SEARCH, element: <SearchPage /> },
    { path: Paths.VIEW, element: <ViewPage /> },
]

// initialize a browser router
export const router = createBrowserRouter(routes)

import { createBrowserRouter } from "react-router-dom"
import SearchPage from '../page/searchPage';
import ViewPage from '../page/viewPage';
import LoginPage from '../page/loginPage';
import SignUp from '../page/signupPage';

import { Paths } from "./paths";
import React from "react";

const routes = [
    { path: "/", element: <SearchPage /> },
    { path: Paths.SEARCH, element: <SearchPage /> },
    { path: Paths.VIEW, element: <ViewPage /> },
    { path: Paths.LOGIN, element: <LoginPage /> },
    { path: Paths.SIGNUP, element: <SignUp /> }
]

// initialize a browser router
export const router = createBrowserRouter(routes)

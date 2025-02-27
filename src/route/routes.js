import { createBrowserRouter } from "react-router-dom"
import SearchPage from '../page/searchPage';
import ViewPage from '../page/viewPage';
import LoginPage from '../page/loginPage';
import SignUpPage from '../page/signupPage';
import AdminPage from '../page/adminPage';
import NewPropertyPage from "../page/newPropertyPage";

import { Paths } from "./paths";
import React from "react";

const routes = [
    { path: "/", element: <SearchPage /> },
    { path: Paths.SEARCH, element: <SearchPage /> },
    { path: Paths.VIEW, element: <ViewPage /> },
    { path: Paths.LOGIN, element: <LoginPage /> },
    { path: Paths.SIGNUP, element: <SignUpPage /> },
    { path: Paths.ADMIN, element: <AdminPage /> },
    { path: Paths.NEWPROPERTY, element: <NewPropertyPage /> }

]

// initialize a browser router
export const router = createBrowserRouter(routes)

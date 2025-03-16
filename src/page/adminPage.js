import React from 'react';
import Admin from "../component/admin/Admin";
import AppBar from "../component/AppBar";
import PageWithAppBar from "../component/PageWithAppBar";

export default function AdminPage() {
    return (
        <PageWithAppBar>
            <Admin/>
        </PageWithAppBar>
    )
}